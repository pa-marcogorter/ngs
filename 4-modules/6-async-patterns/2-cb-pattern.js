const fs = require('fs');

fs.readFile(__filename, function cb(err, data) {                            // Note that the err argument comes first!
  console.log('File data is', data);
});

console.log('TEST');
