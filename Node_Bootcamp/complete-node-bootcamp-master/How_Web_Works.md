# What happens when we access a webpage
- A browser (client) send a request to the server.
- The server then sends a response.
Request-response model or Client Server architecture.

Let's say you want to access google maps: https://www.google.com/maps.
* https - known as the protocal (HTTP or HTTPS)
* domain name - DNS(a server ip address or computer name to get directly connected). How it actually looks like: IP_Address:Port#.
* TCP/IP - transmission control protocol, internet protocol - Internet's control system. How data moves.  TCP breaks down the requests into small packets. and then reassemble it once it reaches the Client side.
* HTTP Request --> communication. You can get or receive data.
* Request target --> what resource is going to be used.


## Front end Vs Back end:

Front end development is everything that happens in the Browser
- Uses JavaScript, HTML, CSS
- Can contain: various frameworks like React, Angular, Vue, GraphQL.


Backend is everything that happens in the web server.
- A server is a computer that is connected to the internet.
- It stores the files
- Contains HTTP Server that communicates with the server
- Static server - store static files.
- Dynamic Web Application - App running ,http server, files that talks to each other. --> This typically contains a database as well that will store application data.

Static Web sites
HTML, CSS, JS --> Browser

Dynamic

Server side rendering:


Server Side Rendered:

Database --> Get data --> Build Website (Contains template) --> HTML/CSS/JS --> Browser --> Page


Client Side Rendered:

API:
      Building API                          Consuming API
|--------------------------|            |----------------------------|
Database --> Get data --> JSON <--->  Browser --> Build Website --> Page
