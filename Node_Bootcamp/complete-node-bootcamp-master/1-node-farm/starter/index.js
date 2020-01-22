// const fs = require('fs');
//
// // read data from file.
// const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
//
// console.log(textInput);
//
//
// const textOut = `This is what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut)
//
//
// console.log('File written');
//

// Synchronous:
// const fs = require('fs');
// const input = fs.readFileSync('input.txt', 'utf-8');
// console.log(input);

//Asynchronous --> Non Blocking
const fs = require('fs');
// fs.readFile('./txt/input.txt', 'utf-8', (err,data) =>{
//   console.log(data);
// })
//
// console.log('Reading file...');


// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//   console.log(data);
// });
// console.log('Will Read File!');

// Why us callbacks in NodeJS?
// In a node JS, there's only 1 thread. Where the code is executied in the processor.
// For each application, there's only one thread.
// All the users accessing the application are using the same thread.

// Synchronous Way --> All users are waiting for others to finish the code to run since it's being blocked.
// Having a synchronous will mean that they will have to wait until the

// Asynchronous way - The time consuming task is processed in the background and returns to the single thread once it finishes.

// NodeJS is completely designed to handle callbacks to build highly scalable web applications.
// Using callbacks does not make the code Asynchronous.


// Call back from hell example:

// const fs = require('fs');

// fs.readFile('start.txt', 'utf-8', (err,data) => {
//   fs.readFile(`${data}.txt`, 'utf-8', (err, data2) => {
//     fs.readFile('append.txt', 'utf-8', (err, data3) => {
//       fs.writeFile('final.txt', `${data2}${data3}`,'utf-8', (err) => {
//         if (err) throw err;
//         console.log('Your file has been saved :D');
//       });
//     });
//   });
// });

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
      console.log(data3);

      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
          console.log('files has been written');
      })
    });
  });
});
