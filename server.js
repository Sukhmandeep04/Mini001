const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to read user data from the JSON file
function readUserData(callback) {
  fs.readFile(path.join(__dirname, 'users.json'), 'utf8', (err, data) => {
    if (err) {
      callback(err);
    } else {
      try {
        const userData = JSON.parse(data);
        callback(null, userData);
      } catch (error) {
        callback(error);
      }
    }
  });
}

// Function to write user data to the JSON file
function writeUserData(userData, callback) {
  fs.writeFile(path.join(__dirname, 'users.json'), JSON.stringify(userData, null, 2), (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
}

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/api/users') {
      // Read user data from a file
      readUserData((err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
      });
    } else if (req.method === 'POST' && req.url === '/api/users') {
      // Handle POST request to create a new user
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
  
      req.on('end', () => {
        try {
          const newUser = JSON.parse(body);
          readUserData((err, data) => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Internal Server Error');
              return;
            }
            data.push(newUser);
            writeUserData(data, (err) => {
              if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
              }
              res.writeHead(201, { 'Content-Type': 'text/plain' });
              res.end('User created successfully');
            });
          });
        } catch (error) {
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          res.end('Invalid JSON format');
        }
      });
    } else if (req.method === 'PUT' && req.url.startsWith('/api/users/')) {
      // Handle PUT request to update a user
      const userId = req.url.split('/').pop();
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
  
      req.on('end', () => {
        try {
          const updatedUser = JSON.parse(body);
          readUserData((err, data) => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Internal Server Error');
              return;
            }
            const userIndex = data.findIndex((user) => user.id === userId);
            if (userIndex === -1) {
              res.writeHead(404, { 'Content-Type': 'text/plain' });
              res.end('User not found');
              return;
            }
            data[userIndex] = { ...data[userIndex], ...updatedUser };
            writeUserData(data, (err) => {
              if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
              }
              res.writeHead(200, { 'Content-Type': 'text/plain' });
              res.end('User updated successfully');
            });
          });
        } catch (error) {
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          res.end('Invalid JSON format');
        }
      });
    } else if (req.method === 'DELETE' && req.url.startsWith('/api/users/')) {
      // Handle DELETE request to delete a user
      const userId = req.url.split('/').pop();
      readUserData((err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
          return;
        }
        const userIndex = data.findIndex((user) => user.id === userId);
        if (userIndex === -1) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('User not found');
          return;
        }
        data.splice(userIndex, 1);
        writeUserData(data, (err) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('User deleted successfully');
        });
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });
 

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server running on <http://localhost:3000/>');
});
