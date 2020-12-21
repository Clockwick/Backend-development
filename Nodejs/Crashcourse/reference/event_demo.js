const EventEmitter = require('events');

// Create class

class MyEmitter extends EventEmitter {
    
}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => console.log('Event Fired!'));

myEmitter.emit('event');