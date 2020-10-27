const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);                               // Create a new version of Read file, one that does not need a callback but rather returns a promise.

async function main() {
  const data = await readFile(__filename);                                  // Using the A sync await feature, you can promise if I any asynchronous action that's designed according to notes, idiomatic callback pattern called back last argument error.
  console.log('File data is', data);
}

main();

console.log('TEST');
