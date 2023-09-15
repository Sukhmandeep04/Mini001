# Mini001
<a href="https://codeclimate.com/github/Sukhmandeep04/Mini001/maintainability"><img src="https://api.codeclimate.com/v1/badges/eba87c50ea47e43824f1/maintainability" /></a>

This code snippet contains a set of functions that can do some basic file operations like read, write, and delete using the Node.js fs (File System) module.

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







