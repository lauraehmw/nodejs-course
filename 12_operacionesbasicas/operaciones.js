const fs = require('fs')


// renombrar archivo síncrono

/*fs.renameSync('./prueba.txt', './config.txt')*/


// renombrar archivo asíncrono

/*fs.rename('./config.txt', './prueba.txt', (err) =>{
    if(err) throw(err);
    console.log("RENOMBRADO");
})*/


// Mover archivo

/*fs.rename('./prueba.txt', './src/prueba.txt', (err) =>{
    if(err) throw(err);
    console.log("MOVIDO");
});*/

//Eliminar archivo

fs.unlinkSync('./src/prueba.txt');
console.log('Archivo eliminado');