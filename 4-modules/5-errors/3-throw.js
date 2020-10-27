// File as seen in course
const fs = require('fs');

const files = ['./1-loop.js', 'zzz.js', './2-try.js'];

files.forEach(file => {
  try {
    const data = fs.readFileSync(file);
    console.log('File data is', data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File not found');
    } else {
      throw err;
    }
  }
});


// Original file from training files
// const path = require('path');
// const fs = require('fs');

// const files = ['.bash_profile', 'kjkjhh', '.npmrc'];

// files.forEach(file => {
//   try {
//     const filePath = path.resolve(process.env.HOME, file);
//     const data = fs.readFileSync(filePath);
//     console.log('File data is', data);
//   } catch (err) {
//     if (err.code === 'ENOENT') {
//       console.log('File not found');
//     } else {
//       throw err;
//     }
//   }
// });
