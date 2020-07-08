const fs = require('fs');
const { Stream } = require('stream');


//Esta no es una buena idea especialmente cuando tenemos archivos muy grandes
/* let contenido = fs.readFileSync('./logs.log');
console.log(`tamaño: ${contenido.length}`)*/


// Es como cargar el archivo a pedacitos, como un video de youtube para que node no sufra 

let stream = fs.createReadStream('./logs.log', 'UTF-8');


// Contener los datos que vayamos leyendo
let data = '';

// Configurar el stream. Los stream funcionan por eventos

stream.once('data',() =>{ /*Cuando detecte datos */
    console.log("Iniciando stream...\n")
});

stream.on('data', (chunk)=>{
    console.log(`${chunk.length} |`);
    data += chunk;
});

stream.on('end', ()=>{
    console.log('Fin del stram...\n');
    console.log(data.length);
})