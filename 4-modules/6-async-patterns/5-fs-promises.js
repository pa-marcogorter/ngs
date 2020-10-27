const { readFile } = require('fs').promises;                                // Destructuring the read file method here from a special object the 'promises'-object that's attached to the top level API of the 'fs'-module

async function main() {
  const data = await readFile(__filename);
  console.log('File data is', data);
}

main();

console.log('TEST');
