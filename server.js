const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const { MongoClient } = require('mongodb');

const mongoUrl = 'mongodb://localhost:3000';
const dbName = 'Mini001';

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/api/users') {
    await handleGetUsers(req, res);
  } else if (req.method === 'POST' && req.url === '/api/users') {
    await handlePostUser(req, res);
  } else if (req.method === 'PUT' && req.url.startsWith('/api/users/')) {
    const userId = req.url.split('/').pop();
    await handlePutUser(req, res, userId);
  } else if (req.method === 'DELETE' && req.url.startsWith('/api/users/')) {
    const userId = req.url.split('/').pop();
    await handleDeleteUser(req, res, userId);
  } else {
    sendResponse(res, 404, 'text/plain', 'Not Found');
  }
});

async function readUserData() {
  const client = new MongoClient(mongoUrl);
  try {
    await client.connect();
    const db = client.db(dbName);
    const usersCollection = db.collection('users');
    const userData = await usersCollection.find({}).toArray();
    return userData;
  } catch (error) {
    throw error;
  } finally {
    client.close();
  }
}

async function writeUserData(userData) {
  const client = new MongoClient(mongoUrl);
  try {
    await client.connect();
    const db = client.db(dbName);
    const usersCollection = db.collection('users');
    await usersCollection.deleteMany({});
    await usersCollection.insertMany(userData);
  } catch (error) {
    throw error;
  } finally {
    client.close();
  }
}

function sendResponse(res, status, contentType, data) {
  res.writeHead(status, { 'Content-Type': contentType });
  res.end(data);
}

function sendJSONResponse(res, status, data) {
  sendResponse(res, status, 'application/json', JSON.stringify(data));
}

async function handleGetUsers(req, res) {
  try {
    const data = await readUserData();
    sendJSONResponse(res, 200, data);
  } catch (error) {
    sendResponse(res, 500, 'text/plain', 'Internal Server Error');
  }
}

async function handlePostUser(req, res) {
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
}

async function handlePutUser(req, res, userId) {
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
}

async function handleDeleteUser(req, res, userId) {
  const data = await readUserData();
  const userIndex = data.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    sendResponse(res, 404, 'text/plain', 'User not found');
  } else {
    data.splice(userIndex, 1);
    await writeUserData(data);
    sendResponse(res, 200, 'text/plain', 'User deleted successfully');
  }
}

server.listen(3000, () => {
  console.log('Server running on <http://localhost:3000/>');
});
