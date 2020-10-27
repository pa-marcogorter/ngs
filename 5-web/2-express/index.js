const express = require('express');                                         // exports its top level API as a function. So when we captured the returned AP, I into a local variable here which is usually named expressed as well, that express variable in our script is now a function and This is why, to create an express server, we just call this function. The result of calling this express function is an object that's usually named server, or you'll see IT named as app in some examples.

const server = express();

// Express works different the 'http'.
// Every URL needs to be declared in order to listened to

server.get('/', (req, res) => {
  res.send('Hello Express')
})

server.get('/about', (req, res) => {
  res.send('About...')
})


server.listen(4242, () => {
  console.log('Express Server is running...');
});
