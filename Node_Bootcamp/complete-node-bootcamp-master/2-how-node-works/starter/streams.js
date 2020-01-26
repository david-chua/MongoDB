const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // Solution 1:
  // fs.readFile('test-file.txt', (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  // solution 2 - with error in file name:
  // const readable = fs.createReadStream('testt-file.txt');
  // readable.on('data', chunk => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", err => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File Not Found");
  // });

  // Solution 3: Readable stream in 2 is much faster than sending data over the network. This will overwhelm network.
  // pipe operator allows us to pipe output of writeable stream into output of readable stream.

  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res);
  // readableSource.pipe(writeableDefinition) - In this case, the definition is the response.
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening ...');
})
