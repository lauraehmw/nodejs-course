/*  
Regresa  desde dónde se está ejecutando este proceso (dónde está node)
y que se está ejecutando también dentro de la carpeta 2_processes
*/

//console.log(process.argv);

function param(p){
    /* Esta función lo que hace es regresar el valor asignado a un parámetro dentro de un arreglo */
    var index = process.argv.indexOf(p);
    //console.log(index)
    return process.argv[index +1]
}

//console.log(param('--nombre'));
/* Esto me regresa un 2 porque ese es el index de este parámetro. */
/* Esto me regresa un Laura porque ese es el index de este parámetro +1 . */

/* PS: para que esto corra, debes correrlo así node .\process.js --nombre "lau" --edad 24 */


var nombre = param('--nombre');
var edad = param ('--edad'); 

console.log(`Tu nombre es ${nombre}, y tienes ${edad} años`)


/* Esta es una forma de obtener los argumentos de un proceso para utilizarla después */