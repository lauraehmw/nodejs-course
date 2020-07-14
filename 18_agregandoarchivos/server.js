/* Un servidor NodeJs se tiene que configurar desde cero, o sea, configurar cómo despacha las solicitudes HTTP*/
const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    console.log(`${req.method} requires ${req.url}`);

    if (req.url == "/") {
      fs.readFile("./public/index.html", "UTF-8", (err, html) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      });
    }else if(req.url.match(/.css$/)){ /* Expresión regular */
        const reqPath = path.join(__dirname, 'public', req.url); /* Toda nuestra ubicación completa */
        const fileStream = fs.createReadStream(reqPath, 'UTF-8'); /* Porque no sabemos qué tan pesado eso */

        res.writeHead(200, {'Content-Type': 'text/css'});
        fileStream.pipe(res); /* Nos manda a pedacito la info */
    }else if(req.url.match(/.png$/)){
        const reqPath = path.join(__dirname, 'public', req.url);
        const fileStream = fs.createReadStream(reqPath);

        res.writeHead(200, {'Content-Type': 'image/png'});
        fileStream.pipe(res); 
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 ERROR');
    }

}).listen(3000);

console.log('Started server...');
