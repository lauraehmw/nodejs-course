//const events  = require('events');
//const emmiter = new events.EventEmitter();
const eventEmmiter = require('events').EventEmitter;
const util = require('util');

/*Crear un nuevo evento y configurarlo para que se pueda mandar a llamar */

/* Nombre del evento y luego el callback cuando se llame esta función */
//emmiter.on('eventoCustom', (msj, status) => {
//    console.log(`${status}: ${msj}`);
//})

//emmiter.emit('eventoCustom', 'Mensaje cargado con exito', 200);


var Persona = function(nombre){
    this.nombre = nombre;
}

util.inherits(Persona, eventEmmiter)

let persona = new Persona('BOB');

//console.log(`Me llamo ${persona.nombre}`)

persona.on('hablar', (mensaje) =>{
    console.log(`${persona.nombre} : ${mensaje}`);
})

persona.emit('hablar', "wonito día");