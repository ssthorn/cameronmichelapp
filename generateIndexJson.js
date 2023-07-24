//command to propagate:
//node generateIndexJson.js

const fs = require('fs');
const path = require('path');

const photosDirectory = path.join(process.cwd(), 'public', 'photosofworkfolder');

fs.readdir(photosDirectory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const jsonFilePath = path.join(photosDirectory, 'index.json');
  const jsonData = JSON.stringify(files);

  fs.writeFile(jsonFilePath, jsonData, (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
      return;
    }

    console.log('index.json has been generated successfully!');
  });
});
