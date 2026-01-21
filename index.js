const http = require("node:http");
const hostname = '127.0.0.1'
const port = 8080;

const server = http.createServer((req,res) =>{  
     res.setHeader('Content-type','text/plain');

     if(req.url === "/"){
      res.setHeader('Content-type','text/plain');
      res.write("This is my main page");
     }else if(req.url === "/about"){
        res.setHeader('Content-type','text/html');
        res.write("<h3>This is my about us page<h3>");
     }else if(req.url === "/contact"){
        res.setHeader('Content-type','text/plain');
        res.write("This is my contact us page");
     }else {
         res.setHeader('Content-type','text/plain');
         res.write("404 page not found")
     }
     
     res.end()
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});