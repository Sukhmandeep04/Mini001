# Mini001
<a href="https://codeclimate.com/github/Sukhmandeep04/Mini001/maintainability"><img src="https://api.codeclimate.com/v1/badges/eba87c50ea47e43824f1/maintainability" /></a>

📄OVERVIEW: This code snippet combines two key functionalities. Firstly, it contains a set of functions for performing basic file operations such as reading, writing, and deleting                  files using the Node.js fs (File System) module. Secondly, it creates an HTTP server that enables user data management through a RESTful API. The primary database system                stores user data in a simple JSON file.

📍File Operations: The code includes functions to read user data from a JSON file (users.json) and write user data back to the file. It efficiently handles errors                                          during these file operations.
📍HTTP Server: The application creates an HTTP server using the built-in http module, allowing users to perform CRUD (Create, Read, Update, Delete) operations on user data. It serves                  as a basic API for user management.

🟡 FILE STRUCTURE 
      🗂️ new-mini001 - 📁 src - 📘 App.js
                             -  📘 useApp.js
      📕 fileOperations.js
      📕 Samplefile.txt
      📗 server.js
      📗 users.json



📘 App.js
________________________

1. JSX Syntax (JSXExample)
   - Description: The JSXExample component showcases JSX syntax, which allows you to write HTML-like code within JavaScript.
   - How to Use: This component renders a simple JSX structure with a heading and a paragraph.

2. Functional and Class Components (ClassComponentExample)
   - Description: The ClassComponentExample class component demonstrates using class components in React, including the constructor and                      component state.
   - How to Use: This component renders a message and a paragraph within a class component. It initializes the state and displays the                       message.

3. Props and State (PropsAndStateExample)
   - Description: The PropsAndStateExample functional component receives props and uses the useState hook to manage the internal component                   state.
   - How to Use: This component displays a greeting message and allows users to increment a counter by clicking a button based on the name                   prop.

4. Conditional Rendering (ConditionalRenderingExample)
   - Description: The ConditionalRenderingExample functional component demonstrates conditional rendering by toggling the visibility of a                    message.
   - How to Use: This component displays a message conditionally, and a button allows you to toggle the message's visibility.
  
5. Lists and Keys (ListAndKeysExample)
   - Description: The ListAndKeysExample functional component renders a list of items using the map function and assigns unique keys to                      each list item.
   - How to Use: This component generates an unordered list of items from an array, each with a unique key.
  
6. Functional Component Fetching Data from an API (APIIntegrationExample)
   - Description: The APIIntegrationExample functional component demonstrates fetching data from an API using the Axios library and                          displaying it.
   - How to Use: This component sends an HTTP GET request to an API (http://localhost:3000/api/users) to fetch a list of users and display                  their names in an unordered list.
     

📑For mini-project-6

The App component is a functional React component that demonstrates React hooks, specifically useState and useEffect, to manage state and perform asynchronous data fetching. This component fetches user data from an API and provides a user interface for refreshing the data.

- Imports
  The component imports the necessary modules, useState and useEffect, from React and the Axios library for making HTTP requests.

- Component Defination

  export const App = () => {
  const [users, setUsers] = useState([]);

  . The component defines a functional component named App.
  . It uses the useState hook to declare state variable users initialized as an empty array and a function setUsers to update this state.

- Data Fetching with useEffect
  . The useEffect hook executes the data fetching code when the component is mounted.
  . It makes an HTTP GET request to the specified API endpoint (http://localhost:3000/api/v1/users).
  . If the request is successful, the fetched user data is logged and stored in the users state.
  . If an error occurs, the system will log and save an error message.

- Event Handler for Data Refresh
  . The component defines a function handleRefresh, intended to be called when the user wants to refresh the user data.
  . When invoked, it performs another HTTP GET request to the same API endpoint to refresh the user data.
  . If successful, it updates the users state with the refreshed data.
  . The system logs any errors that occur during the refresh process.

- Render Method

    return { users, handleRefresh };

  . The App component returns an object containing two properties: users and handleRefresh.
  . Destructuring the App component object allows other components to access the user's state and the handleRefresh function actively.


📘 useApp.js
________________________

- Imports
  The component imports the necessary modules: React from the 'react' library and the custom hook useApp from the './App.js' file.

- Component Defination

  function App() {
    const { users, handleRefresh } = useApp();

  . The component defines a functional component named App.
  . It uses the useApp custom hook to destructure the users state and the handleRefresh function. This hook allows the component to access 
    the state and behaviour defined in the App.js file.

- User Interface

  . The App component returns a user interface that displays a list of users and provides a "Refresh" button.
  . The <h1> element displays the title "User List."
  . When you click on the "Refresh" button, it triggers the handleRefresh function, which refreshes the user data.
  . The list of users is conditionally rendered based on the presence of data:
      - If users are not empty, it maps through the users and displays their names with unique keys.
      - If no users are available, it shows the message "No users available."


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

-- Working of node.js event loop

1. Reading and Writing Files: In functions like readUserData and writeUserData, asynchronous file operations are performed using await fs.readFile and await fs.writeFile. These operations are non-blocking, meaning they don't halt the execution of other code. Instead, they rely on the event loop to manage the I/O efficiently. While waiting for file read/write operations to complete, Node.js executes different code. The event loop monitors the progress of these operations and their associated callbacks.
   
2. Request Handling: When handling HTTP requests, for example handleGetUsers, handlePostUser, handlePutUser, and handleDeleteUser, the code listens for incoming requests asynchronously. To accomplish this task, event listeners such as 'req.on('data')' and 'req.on('end')' are utilized. These listeners enable the server to process requests without blocking the event loop. When an HTTP request is received, it is placed in the event queue, and the event loop continuously checks for pending requests to handle. This ensures that multiple requests can be processed concurrently, making the server efficient and responsive.

3. Server Start: The final step is to start the HTTP server using the server.listen method. Once the server is up and running, it enters an event-driven mode that listens for incoming connections. The event loop manages the server event loop, ensuring that it can handle multiple connections simultaneously without obstructing other tasks. When a client requests an HTTP, the server processes it asynchronously, and the event loop keeps the server responsive.

