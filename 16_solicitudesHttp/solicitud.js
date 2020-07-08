const http = require('http');

/* Hostname: The Wepage URL. Path... well. the path*/
const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 80,
    path: '/posts',
    method: 'GET'
}

const req = http.request(options, res => {
    console.log(`status code: ${res.statusCode}`);
    console.log(`headers: %j`, res.headers);

    let body = ''
    res.on('data', chunk =>{
        body += chunk;
    })

    res.on('end', ()=>{
        console.log('\n\n Resultados:');
        console.log(body);
    })
});

req.on('error', err=>{})

req.end();