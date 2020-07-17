const express = require('express');



const app = express();



/* This could be the way of extractig data by hand */

app.get('/', (req, res) =>{
    let url = req.url;

    url = url.substring(url.indexOf('?') +1);
    
    const params = url.split('&');
    let text = ''
    params.forEach(param =>{
        let object = param.split('=');

        text += object[0] + ': ' + object[1] + '<br>';
    })

    res.send(`<h1>Tus datos son: <br> ${text}</h1>`);
    console.log(text);
});

app.listen(3000, () =>{
    console.log('Server iniciado...')
})