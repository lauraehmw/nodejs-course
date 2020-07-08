var path = require ('path');
var util = require ('util');
var v8 = require ('v8');

/* Junta ubicaciones */
//console.log(path.join(__dirname, 'www', 'img', 'home', 'uploads'))

/* 21 Jun 21:50:10 - hola! */
//util.log("hola!");


/* Hola, Lau. Tienes 24 años. */
//var nombre = "Lau"
//var edad = 24
//var txt = util.format("Hola, %s. Tienes %d años.", nombre, edad)

//console.log(txt);

console.log(v8.getHeapStatistics());