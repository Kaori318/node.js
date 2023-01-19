import EventEmitter from "events";

class TimerEmitter extends EventEmitter {}
const emitter = new TimerEmitter()

emitter.on('timerTick', ([dateInFuture, timer]) => {
 const dateNow = new Date();
 if (dateNow >= dateInFuture) {
  emitter.emit('timerEnd', timer)
 } else {
  console.log(getPrettyTime((dateInFuture - dateNow) / 1000), 'left')
 }
})

emitter.on('timeEnd', timer => {
 clearInterval(timer)
console.log('Time is up')
})

const getPrettyTime = (seconds) => {
 const arr = [
  Math.floor(seconds % 60),
  Math.floor((seconds / 60) % 60),
  Math.floor((seconds / (60 * 60)) % 24),
  Math.floor(seconds / (60 * 60 * 24)),
 ]
 return `${arr.pop()} days ${arr.pop()} hours ${arr.pop()} minutes ${arr.pop()} seconds`;
}

const start = (dateInFuture) => {
 setInterval(function() {
  emitter.emit('timerTick', [dateInFuture, this])
 }, 1000)
}

for(const argument of process.argv.slice(2)) {
 const [hour, day,month, year] = argument.split("-")
 const dateInFuture = new Date(year, month - 1, day, hour)
 console.log(dateInFuture)
 if(isNaN(dateInFuture)) continue
 start(dateInFuture)
}