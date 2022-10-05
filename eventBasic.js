const EventEmitter= require('events')

const emitter= new EventEmitter();

emitter.on('bark', ({name, action, speed})=>{
    console.log(`The ${name}, is ${action}, and running at ${speed} h/r`)

})

// raise the event

emitter.emit('bark', {
    name:'dog',
    action:'barking',
    speed:100
})