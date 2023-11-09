# Mini001 [Mini-project-02]
<a href="https://codeclimate.com/github/Sukhmandeep04/Mini001/maintainability"><img src="https://api.codeclimate.com/v1/badges/eba87c50ea47e43824f1/maintainability" /></a>
<a href="https://codeclimate.com/github/Sukhmandeep04/Mini001/maintainability"><img src="https://api.codeclimate.com/v1/badges/eba87c50ea47e43824f1/maintainability" /></a>

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

- File Operations
  
1. readUserData(callback): Reads user data from 'users.json' and handles JSON parsing and error management.
2. writeUserData(userData, callback): Writes user data to 'users.json' and converts data to JSON format with proper indentation.
   
- HTTP Server
1. Server Creation: The 'http' module is used to create an HTTP server.
2. Routes Handling:
         GET /api/users: Retrieves user data.
         POST /api/users: Creates a new user.
         PUT /api/users/:userId: Updates an existing user.
         DELETE /api/users/:userId: Deletes an existing user.
3. Request Handling Functions:
         handleGetUsers(req, res): Handles GET requests for user data.
         handlePostUser(req, res): Handles POST requests to create a new user.
         handlePutUser(req, res): Handles PUT requests to update an existing user.
         handleDeleteUser(req, res): Handles DELETE requests to delete an existing user.

- Response Handling
1. sendJSONResponse(res, status, data): Sends JSON responses with the specified status code.
2. sendPlainTextResponse(res, status, message): Sends plain text responses with the specified status code and message.
3. sendErrorResponse(res, status, message): Sends error responses with a specified status code and message.
