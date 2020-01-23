const fs = require('fs');
const http = require('http');
const url = require('url');
// Server:


const templateOverview= fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const templateCard= fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const templateProduct= fs.readFileSync(`${__dirname}/templates/product.html`,'utf-8');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  return output
}
const server = http.createServer((req,res) => {
  const pathName = req.url;
  // Overview Page
  if (pathName === '/' || pathName === '/overview'){
    res.writeHead(200, {'Content-type': 'text/html'});
    const cardsHtml = dataObj.map(el => replaceTemplate(templateCard, el)).join('');
    const output = templateOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

    res.end(output);

  // PRODUCT PAGE
  } else if (pathName === '/product'){
    res.end('This is the PRODUCT');

  // API
  } else if (pathName ==='/api'){
    fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
      //const productData = JSON.parse(data); --> This is moved to the top
      //console.log(productData);
      res.writeHead(200, {'Content-type': 'application/json'})
      res.end(data);
    });

  // NOT FOUND
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
// We'll use express for bigger applicaiton.
