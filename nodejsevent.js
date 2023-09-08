const  EventEmitter = require ('events') 

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('turn of  the motor');
  setTimeout(() => {
      console.log(' plz turn of  the motor.......');
    
  }, 3000);
});

console.log("the script is running")
console.log("the script is running................")
myEmitter.emit('waterfull');