# Mini001
<a href="https://codeclimate.com/github/Sukhmandeep04/Mini001/maintainability"><img src="https://api.codeclimate.com/v1/badges/eba87c50ea47e43824f1/maintainability" /></a>

📄OVERVIEW: This code snippet combines two key functionalities. Firstly, it contains a set of functions for performing basic file operations such as reading, writing, and deleting                  files using the Node.js fs (File System) module. Secondly, it creates an HTTP server that enables user data management through a RESTful API. The primary database system                stores user data in a simple JSON file.

📍File Operations: The code includes functions to read user data from a JSON file (users.json) and write user data back to the file. It efficiently handles errors                                          during these file operations.
📍HTTP Server: The application creates an HTTP server using the built-in http module, allowing users to perform CRUD (Create, Read, Update, Delete) operations on user data. It serves                  as a basic API for user management.

🟡 FILE STRUCTURE 
      📕 fileOperations.js
      📕 Samplefile.txt
      📗 server.js
      📗 users.json
      

📕 fileOperations.js
_____________________________

-- readFile(filePath)
      Purpose: 
      This function is used to read the contents of a file specified by the filePath parameter.
      Parameters:
        •	filePath (string): The path to the file you want to read.
      Usage:
      function readFile(filePath)

-- writeFile(filePath, data)
      Purpose: This function is used to write data to a file specified by the filePath parameter.
      Parameters:
        •	filePath (string): The path to the file where you want to write the data.
        •	data (string): The data that you want to write to the file.
      Usage:
      const filePath = 'Samplefile.txt';
      const data = 'Kaur';
      writeFile(filePath, data);

-- deleteFile(filePath)
      Purpose: This function deletes a file specified by the filePath parameter.
      Parameters:
        •	filePath (string): The path to the file you want to delete.
      Usage:
      const filePath = 'Samplefile.txt';
      deleteFile(filePath);


-- Example Usage
      In the example provided at the end of the code:
        •	readFile(filePath); is used to read the file's contents specified by the filePath variable.
        •	writeFile(filePath, data); is used to write the string 'Kaur' to the file specified by the filePath variable.
        •	deleteFile(filePath); is used to delete the file specified by the filePath variable.
      
  Each function handles potential errors during file operations and provides appropriate error messages when necessary.


📗server.js
__________________________

-- Dependencies 
      - `http`: This built-in Node.js module creates an HTTP server and handles incoming requests.
      - `fs`: The Node.js built-in file system module reads from and writes to the `users.json` file.
      - `path`: This module helps work with cross-platform file paths

-- Key Functionalities 

1. `readUserData(callback)`: This function reads user data from the `users.json` file and passes it to the provided callback function. It handles potential errors during file reading.

2. `writeUserData(userData, callback)`: This function writes user data to the `users.json` file. It serializes the data to JSON format and handles potential errors during file writing.

3. `handleGetUsers(req, res)`: Handles HTTP GET requests to retrieve a list of all users, including advanced features like filtering and sorting using query parameters. It reads user data using `readUserData` and sends it as a JSON response.

4. `handlePostUser(req, res)`: Handles HTTP POST requests to create new users. It parses the request body as JSON, adds the new user to the existing data, and writes the updated data using `writeUserData`.

5. `handlePutUser(req, res)`: Handles HTTP PUT requests to update existing users. It parses the request body as JSON, finds the user by ID, updates their information, and writes the changes to the file.

6. `handleDeleteUser(req, res)`: Handles HTTP DELETE requests to delete users by their ID. It finds the user, removes them from the data, and writes the updated data to the file.

7. `sendJSONResponse(res, status, data)`, `sendPlainTextResponse(res, status, message)`, and `sendErrorResponse(res, status, message)`: These helper functions send HTTP responses with the appropriate status codes and content types. They help standardize response handling.


-- Routes

- GET `/api/users`: Retrieves a list of all users,supporting filtering and sorting using query parameters.
- POST `/api/users`: Creates a new user by parsing JSON data from the request body.
- PUT `/api/users/{id}`: Updates an existing user by their ID, allowing modifications using JSON data from the request body.
- DELETE `/api/users/{id}`: Deletes an existing user by their ID and updates the user data.

-- Usage 
      1. Start the server by running `node server.js`.
      2. Access the API at `http://localhost:3000`.

-- Error Handling
      The server is designed to handle various error scenarios gracefully. It includes handling internal server errors (status code 500),         invalid JSON format (status code 400), and resource not found (status code 404).

