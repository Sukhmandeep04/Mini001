# Mini001 [Mini-project-02]
<a href="https://codeclimate.com/github/Sukhmandeep04/Mini001/maintainability"><img src="https://api.codeclimate.com/v1/badges/eba87c50ea47e43824f1/maintainability" /></a>
<a href="https://codeclimate.com/github/Sukhmandeep04/Mini001/maintainability"><img src="https://api.codeclimate.com/v1/badges/eba87c50ea47e43824f1/maintainability" /></a>

🟡 FILE STRUCTURE 
      📕 fileOperations.js
      📕 Samplefile.txt
      📗 server.js
      📗 users.json
      

📕 fileOperations.js
_____________________________

-- Functions
      
- readFile(filePath)
    Parameters: filePath (string)
    Description: This method reads the content of a specified file asynchronously. If the operation is successful, it logs the file content. Otherwise, it logs an error.
  
- writeFile(filePath, data)
    Parameters: filePath (string), data (string)
    Description: This method writes the provided data to a specified file asynchronously. Upon completion, it logs a success message. If the operation fails, it logs an error.
  
- deleteFile(filePath)
    Parameters: filePath (string)
    Description: This method deletes a specified file asynchronously. Upon completion, it logs a success message. If the operation fails, it logs an error.


  
📗server.js
__________________________

-- Dependencies 
      - `http`: This built-in Node.js module creates an HTTP server and handles incoming requests.
      - `fs`: The Node.js built-in file system module reads from and writes to the `users.json` file.
      - `path`: This module helps work with cross-platform file paths

-- Key Functionalities 

1. `readUserData(callback)`: This function reads user data from the `users.json` file and passes it to the provided callback function. It handles potential errors during file reading.

2. `writeUserData(userData, callback)`: This function writes user data to the `users.json` file. It serializes the data to JSON format and handles potential errors during file writing.

3. `handleGetUsers(req, res)`: Handles HTTP GET requests to retrieve a list of all users. It reads user data using `readUserData` and sends it as a JSON response.

4. `handlePostUser(req, res)`: Handles HTTP POST requests to create new users. It parses the request body as JSON, adds the new user to the existing data, and writes the updated data using `writeUserData`.

5. `handlePutUser(req, res)`: Handles HTTP PUT requests to update existing users. It parses the request body as JSON, finds the user by ID, updates their information, and writes the changes to the file.

6. `handleDeleteUser(req, res)`: Handles HTTP DELETE requests to delete users by their ID. It finds the user, removes them from the data, and writes the updated data to the file.

7. `sendJSONResponse(res, status, data)`, `sendPlainTextResponse(res, status, message)`, and `sendErrorResponse(res, status, message)`: These helper functions send HTTP responses with the appropriate status codes and content types. They help standardize response handling.


-- Routes

- GET `/api/users`: Retrieves a list of all users.
- POST `/api/users`: Creates a new user.
- PUT `/api/users/{id}`: Updates an existing user by their ID.
- DELETE `/api/users/{id}`: Deletes an existing user by their ID.

-- Usage 
      1. Start the server by running `node server.js`.
      2. Access the API at `http://localhost:3000`.

-- Error Handling
      The server is designed to handle various error scenarios gracefully. It includes handling internal server errors (status code 500), invalid JSON format (status code 400), and           resource not found (status code 404).

