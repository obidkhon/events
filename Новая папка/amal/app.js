const EventEmitter = require('events');
const emiter= new EventEmitter();
emiter.on('massageLoger',(nur)=>{
    console.log('chiqig end', nur)
})
emiter.emit('massageLoger',{name:'Obid', age:40, stlyle:'node.js'} )
