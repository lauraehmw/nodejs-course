const fs = require('fs');
const readLine = require('readline');


// Versión original
/*let i =readLine.createInterface(process.stdin, process.stdout);

i.question('Cuál es tu nombre? > ', (nombre) =>{
    fs.writeFileSync(`./${nombre}.txt`, `Esto dijo ${nombre} \n`);
    process.stdout.write('Qué quieres decir\n');

    i.on('line', (dicho) =>{
        if(dicho.trim() == 'salir'){
            i.close();
        }else{
            fs.appendFileSync(`./${nombre}.txt`, dicho.trim() + '\n');
        }
    })
})*/

//Versión stream

let i =readLine.createInterface(process.stdin, process.stdout);

i.question('Cuál es tu nombre? > ', (nombre) =>{
    let stream = fs.createWriteStream(`./${nombre}.txt`);
    stream.write(`Esto dijo ${nombre} \n`);
    process.stdout.write('Qué quieres decir\n');

    i.on('line', (dicho) =>{
        if(dicho.trim() == 'salir'){
            stream.close();
            i.close();
        }else{
            stream.write(dicho.trim() + '\n');
        }
    })
})