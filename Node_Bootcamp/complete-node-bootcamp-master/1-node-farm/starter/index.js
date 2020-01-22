const fs = require('fs');

// read data from file.
const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textInput);


const textOut = `This is what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut)


console.log('File written');
