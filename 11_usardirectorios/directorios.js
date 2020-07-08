const fs = require('fs');

// mkdir

/*fs.mkdirSync('./img');*/

// Ahora de forma asíncrona

/*fs.mkdir('css', (err) =>{
    if(err) throw('Error: '+ err);

    console.log('Carpeta creada')
})*/


//Validar si la carpeta existe antes de crearla

if(fs.existsSync('css')) console.log('La carpeta ya existe O:')
else{ 
    fs.mkdir('./css', () => console.log('La carpeta ha sido creada'));
}