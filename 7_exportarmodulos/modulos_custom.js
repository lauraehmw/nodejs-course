const persona = require('./libs/persona');


let ray = new persona ('Ray');

ray.on('habla', (mensaje)=> {
    console.log(`${ray.nombre}: ${mensaje}`);
})

ray.emit('habla', 'Amo mucho a Laura. Obviamente no soy Laura escribiendo esto.')