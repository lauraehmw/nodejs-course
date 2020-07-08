const fs = require('fs');

const archivo = 'prueba.txt';

// Validar si existe un archivo


// Versión 1
/*if(fs.existsSync(archivo)){
    console.log("El archivo existe");
}else{
    console.log('El archivo no existe');
}*/


/* Versión 2*/
/* Pregunta si el archivo es visible al proceso, o sea, sí existe o no. Lo está evaluando contra la constante F._OK */
/*fs.access(archivo, fs.constants.F_OK, (err) =>{
    if(err){
        console.log("El archivo no existe");
    }else{
        console.log("El archivo existe");
    }
})*/


/* Escribir en un archivo */

/*const contenido = 'Este es un texto aleatorio el cual vamo a insertar'

fs.writeFileSync(archivo, contenido);

console.log('Se ha escrito en el archivo');*/

/* Otra manera de escribir en un archivo de forma asíncrona */

/*const contenido = 'Este es un texto aleatorio el cual vamo a insertar'
fs.writeFile(archivo, contenido, (err) =>{
    if(err) throw('Hubo un error al escribir en el archivo');


    console.log('Se ha escrito en el archivo');
})*/

/* Adjuntar en el archivo */

const textAdicional = 'Nueva link super cool'

fs.appendFile(archivo, textAdicional, (err)=>{
    if(err) throw('No se puedo adjuntar más texto')

    console.log('Se ha adjuntado más código')
})