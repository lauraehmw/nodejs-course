const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello Moon App!</title>
      </head>
      <body>
        <h1>Hello Moon!</h1>
        <p>
            Bienvenido a mi servidor!
        </p>
      </body>
    </html>    
    `);
}).listen(3000);
/* Un servidor Node.JS está sobre el puerto 3000 por lo general */

console.log('Inició server');