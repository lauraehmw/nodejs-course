const http = require('http')

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width-device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie-edge">
                    <title>Results</title>
                </head>
                <body>
                    <h1>Hello, baby moon!</h1>
                    <h2>Welcome to this cool site</h2>
                </body>
            </html>

    `)
}).listen(3000);

console.log("Servidor iniciado");