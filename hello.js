// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// Create HTTP server 
const server = http.createServer((req, res) => {

   // Set the response HTTP header with HTTP status and Content type
   res.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body "Hello World"
   res.end('Hello World\n');
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
})

//Express
const express = require('express')
const app = express();
//routing GET method
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

//Respond to POST request on the root route (/), the application’s home page:

app.post('/', function (req, res) {
   res.send('Got a POST request')
 })

 //Respond to a PUT request to the /user route:
 app.put('/user', function (req, res) {
   res.send('Got a PUT request at /user')
 })

 //Respond to a DELETE request to the /user route:
 app.delete('/user', function (req, res) {
   res.send('Got a DELETE request at /user')
 })

 