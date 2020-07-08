var readLine = require ('readline');
var util = require('util');

/* Crear una interfaz para este módulo. 
Esto nos va a permitir mapear los procesos
STDIN STDOUT */

var rl = readLine.createInterface(process.stdin, process.stdout);
var persona = {
    nombre : '',
    comentarios: []
}

rl.question('¿Cuál es tu nombre? ', (respuesta) => {
    //console.log(`Hola, ${respuesta}`)
    persona.nombre = respuesta;
    rl.setPrompt('Cómentame algo ');
    rl.prompt();
    //process.exit();
})

rl.on('line', (input) => {
    if (input.trim() === 'salir'){
        var mensaje = util.format("Te llamas %s y me tú me dijiste cosas mu feas %j", persona.nombre, persona.comentarios)
        console.log(mensaje);
        process.exit();
    }

    //console.log("Escribiste una línea... ");
    persona.comentarios.push(input.trim());
    rl.setPrompt('Cómentame algo ');
    rl.prompt();
})