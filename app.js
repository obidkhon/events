const EventEmitter = require('events');

  const  emitter = new EventEmitter();
  emitter.on('messageLoged',(hur)=>{
      console.log('listener caqldi',hur)
  })
  emitter.emit('messageLoged',{id:1,url:"http://.." })
