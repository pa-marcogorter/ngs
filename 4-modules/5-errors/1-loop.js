// File as seen in course
const fs = require('fs');

const files = ['./1-loop.js', 'zzz.js', './2-try.js'];

files.forEach(file => {
  const data = fs.readFileSync(file);
  console.log('File data is', data);
});


// Original file from training files
// const path = require('path');
// const fs = require('fs');

// const files = ['./1-loop.js', './2-try.js'];

// files.forEach(file => {
//   const filePath = path.resolve(process.env.HOME, file);
//   const data = fs.readFileSync(filePath);
//   console.log('File data is', data);
// });
