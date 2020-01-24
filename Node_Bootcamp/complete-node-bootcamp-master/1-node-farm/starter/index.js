const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');
// Server:


const templateOverview= fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const templateCard= fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const templateProduct= fs.readFileSync(`${__dirname}/templates/product.html`,'utf-8');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);

const slugs = dataObj.map(el => slugify(el.productName, {lower: true}));
console.log(slugs)
const server = http.createServer((req,res) => {
  // const pathname = req.url;
  const { query, pathname } = url.parse(req.url, true);
  // Overview Page
  if (pathname === '/' || pathname === '/overview'){
    res.writeHead(200, {'Content-type': 'text/html'});
    const cardsHtml = dataObj.map(el => replaceTemplate(templateCard, el)).join('');
    const output = templateOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);

    res.end(output);

  // PRODUCT PAGE
} else if (pathname === '/product'){
    res.writeHead(200, { 'Content-type': 'text/html'});
    const product = dataObj[query.id]
    const output = replaceTemplate(templateProduct, product);
    res.end(output);

  // API
} else if (pathname ==='/api'){
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
