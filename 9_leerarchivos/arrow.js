//  Función normal

function sum(a,b){
    return a + b;
}


//  Función Flechita

/* 
    - No se usa la palabra función porque se asumen
    - Las funciones se asignan a una variable porque las funciones
    ya crean una variable llamada como el nombre de la función
    - Solo poner el arrow es lo que le hace una arrow function
*/

let sum2  =  (a, b) => {
    return a + b
}

/* De esta manera todo lo que está después de la flecha se asume como un return */

let sum3  =  (a, b) => a + b


/* Otro ejemplo */

function isPositve (number){
    return number >=0
}

/* Podemos quitar los parentesis del parámetro */

isPositve2 = number => number >= 0


/* Otro ejemplo para cuando no se tiene argumentos*/

function randomNumber (){
    return Math.random
}

let randomNumber2 = ()  => Math.random


/* Las funciones arrow son más utiles cuando las funciones normales por sí mismas no tienen nombre */

document.addEventListener('click', function(){
    console.log('Click')
})

document.addEventListener('click', () => console.log('Click'))



/* Wueno, pero esto no es lo más interesante */

class Person{
    constructor(name){
        this.name = name 
    }

    printNameArrow(){
        setTimeout(() =>{
            console.log('Arrow', this.name)
        }, 100)
    }

    printNameFunction(){
        setTimeout(function(){
            console.log('Function' + this.name)
        }, 100)
    }
}

let person = new Person('Lau')
person.printNameArrow()
/* Arrow: Lau */
person.printNameFunction()
/* Function: */

/* WHY?
    This es diferente en una función que dentro de una función arrow.
    En una función normal, se define this dependiendo en dónde está llamada la función.
    O sea, básicamente es lo mismo que si estuviera afuera en este caso.
    Normalmente, se redefine en el scope que estás tratando.
    En el caso de las funciones arrow, this no es redefinido 
*/