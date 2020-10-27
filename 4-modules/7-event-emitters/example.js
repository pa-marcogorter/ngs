const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const myEmitter = new EventEmitter();

setImmediate(() => {                                                        //  The callback of set immediate will be placed on the event lube, and it will be invoked after the rest of this program is executed.
    myEmitter.emit('TEST_EVENT');
})

myEmitter.emit('TEST_EVENT');                                               // Emitting before the listener

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
})
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
})
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
})

// myEmitter.emit('TEST_EVENT');                                               // Emitting after the listener, so now it will be displayed 3 times