/* 
Permite imprimir en la terminal un mensaje 
Teóricamente esto no nos da un salto de línea automático, pero yo si lo veo :c 
Si lo necesitas, solo agrega \n
*/
//process.stdout.write("Goodbye, moon!");


/* Leer y escribir */
//process.stdout.write("¿Cómo te llamai? ");

/* Esto significa que va a recibir cualquier tipo de dato 
y la funcion es lo que va a hacer cada que empiece a escuchar información
(callback)

Esta cosa se ejecuta 4Ever ... hasta que lo matas con exit.
*/
//var nombre;

var preguntas = ['¿Cuál es tu nombre? ', 
                '¿A qué hora sales por el pan? ', 
                'Si tuvieras que elegir entre ser una paleta de hielo o un cono de helado, ¿qué eliges? ',
                '¿Thrifty o Dairy Queen? ']

var respuestas = []


function pregunta(i){
    process.stdout.write(preguntas[i]);
}

//process.stdin.on('data', function(data){
    ///process.stdout.write(data.toString());
    //nombre = data.toString().trim();
    /* Trim lo que hace es quitar espacios innecesarios */
    //process.stdout.write(`Hola, ${nombre}!`);
    //process.exit();
//}) 

process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim());
    if(respuestas.length < preguntas.length){
        /*pregunta(respuestas.length);*/
    }
    else{
        process.exit()
    }
})

pregunta(0)

/* 
Esto funciona de esta manera por la manera asícrona en que Node JS se maneja 
No hay un orden de que después de una pregunta ejecute el Stdin
Stdout solo se va ejecutando conforme le vayan llegand las solicitudes 
La actividad principal sigue siendo stdin
Recordemos que Stdin es el que se imprime 4ever
*/