const fs = require('fs');

setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("text-file.txt", () => {
  console.log("I/O finished");

  setTimeout(() => console.log("timer 2 finished"), 0);
  setTimeout(() => console.log('timer 3 finished'), 3000);
  setImmediate(() => console.log("Immediate 2 finished"))

  process.nextTick(() => console.log("Process.nextTick"));
})

console.log("hello from the top level code");
