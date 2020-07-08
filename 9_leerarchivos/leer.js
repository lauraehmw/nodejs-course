var fs = require("fs");

//var files = fs.readdirSync('./');

fs.readdir('./', (error, files) => {

    if(error){
        throw error
    }

    console.log(files);

    /* Es muy importante ponerle la codificación o el archivo va a salir en hexadecimales */
    /*var archivo = fs.readFileSync('./archivo.txt', 'UTF-8');

    console.log('Contenido del archivo...')
    console.log(archivo)*/

    fs.readFile('./archivo.txt', 'UTF-8', (error, archivo) =>{
        console.log(archivo)
    })
    console.log('Contenido del archivo...')

})  