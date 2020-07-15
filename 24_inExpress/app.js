const express = require('express');

var app = express();

/* Here configure all the things our app will need*/
app.use(express.static('./public'))

app.listen(3000)

console.log('Express iniciado...')