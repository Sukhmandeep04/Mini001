const fs = require('fs');
 
// FUNCTION FOR READING THE FILE
function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        console.log('File content:', data);
    });
}

// FUNCTION FOR WRITING FILE
function writeFile(filePath, data) {
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error('Error writing the file:', err);
            return;
        }
        console.log('The file has been saved!', data);
    });
}

// FUNCTION TO DELETE THE FILE
function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting a file', err);
            return;
        }
        console.log(`${filePath} was deleted`);
    });
}

// Example usage:
const filePath = 'Samplefile.txt';
const data = 'Kaur';

// Read the file
readFile(filePath);

// Write data to the file
writeFile(filePath, data);

// Delete the file
deleteFile(filePath);