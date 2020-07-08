const eventEmmiter = require('events').EventEmitter;
const util = require('util');
const { randomBytes } = require('crypto');

var Persona = function(nombre){
    this.nombre = nombre; 
}

util.inherits(Persona, eventEmmiter);

module.exports = Persona;
