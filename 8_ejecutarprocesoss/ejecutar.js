const { stdout } = require('process');

const exec = require('child_process').exec


/* Aquí puedes ejecutar un script en lugar del comando y mandarle parámetros */

exec("dir", (err,stdout) =>{
    if(err){
        throw err;
    }

    console.log('Comando ejecutado');
    console.log(stdout);
});