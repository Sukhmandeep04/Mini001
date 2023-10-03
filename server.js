const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// Function to read user data from the JSON file using Promises
function readUserData() {
  return fs.readFile(path.join(__dirname, 'users.json'), 'utf8')
    .then(data => JSON.parse(data))
    .catch(error => {
      throw error;
    });
}

// Function to write user data to the JSON file using Promises
function writeUserData(userData) {
  return fs.writeFile(path.join(__dirname, 'users.json'), JSON.stringify(userData, null, 2))
    .then(() => {
      return null; // Return null to indicate success without errors
    })
    .catch(error => {
      throw error;
    });
}

// Helper function to send responses
function sendResponse(res, status, contentType, data) {
  res.writeHead(status, { 'Content-Type': contentType });
  res.end(data);
}

// Create an HTTP server
const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET' && req.url === '/api/users') {
      const data = await readUserData();
      sendResponse(res, 200, 'application/json', JSON.stringify(data));
    } else if (req.method === 'POST' && req.url === '/api/users') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });

      req.on('end', async () => {
        try {
          const newUser = JSON.parse(body);
          const data = await readUserData();
          data.push(newUser);
          await writeUserData(data);
          sendResponse(res, 201, 'text/plain', 'User created successfully');
        } catch (error) {
          sendResponse(res, 400, 'text/plain', 'Invalid JSON format');
        }
      });
    } else if (req.method === 'PUT' && req.url.startsWith('/api/users/')) {
      const userId = req.url.split('/').pop();
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });

      req.on('end', async () => {
        try {
          const updatedUser = JSON.parse(body);
          const data = await readUserData();
          const userIndex = data.findIndex((user) => user.id === userId);
          if (userIndex === -1) {
            sendResponse(res, 404, 'text/plain', 'User not found');
          } else {
            data[userIndex] = { ...data[userIndex], ...updatedUser };
            await writeUserData(data);
            sendResponse(res, 200, 'text/plain', 'User updated successfully');
          }
        } catch (error) {
          sendResponse(res, 400, 'text/plain', 'Invalid JSON format');
        }
      });
    } else if (req.method === 'DELETE' && req.url.startsWith('/api/users/')) {
      const userId = req.url.split('/').pop();
      const data = await readUserData();
      const userIndex = data.findIndex((user) => user.id === userId);
      if (userIndex === -1) {
        sendResponse(res, 404, 'text/plain', 'User not found');
      } else {
        data.splice(userIndex, 1);
        await writeUserData(data);
        sendResponse(res, 200, 'text/plain', 'User deleted successfully');
      }
    } else {
      sendResponse(res, 404, 'text/plain', 'Not Found');
    }
  } catch (error) {
    sendResponse(res, 500, 'text/plain', 'Internal Server Error');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running on <http://localhost:3000/>');
});
