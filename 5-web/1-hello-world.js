const http = require('http');                                               // require call returns the API of the module that we're requiring

// const server = http.createServer((req, res) => {                            // The 'createServer' is a function that accepts an argument, and its argument is also a function. This is why we have an in line function reference here.
//   res.end('Hello World\n');
// });

const requestListener = (req, res) => { 
  // req and res objects are streams. The request object is a readable stream, while the response object is a writeable one. 
  console.dir(req, { depth: 0 });
  console.log('Request URL: ' + req.url);
  res.end('Hello World\n');
}

// const server = http.createServer(requestListener);                          // We want to pass a reference to the function, not a function itself

// Re-write:
const server = http.createServer();
server.on('request', requestListener);                                      // Emitter functionality. Event name is 'request'

server.listen(4242, () => {
  console.log('Server is running...');
});
