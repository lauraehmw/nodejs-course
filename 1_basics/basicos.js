/* Se manda llamar un módulo que controla la parte de archivos / direcciones */
var path = require("path");

/* 
Esta parte de código la puso solita VSCODE al correr, wtf. 
Conclusión: La magia sí existe o los duendes chinos que viven en mi computadora son muy amables 
*/
const { basename } = require("path");

var a = 5;
var b = 10;

/* Template */
console.log(`El resultado es ${a+b}`);

/* 
Imprime la dirección donde se encuentra el archivo ejecutándose. 
Es una variable global que existe dentro de mi aplicación.
*/
console.log(__dirname);

/* Toda la dirección absoluta más el nombre del archivo */
console.log(__filename);

/* Solo el nombre del archivo */

console.log(basename(__filename));

/* 
Lo anterior corre pero por cómo vscode agregó ese pedazo de código,
 así es como debió haber corrido 
*/

console.log(path.basename(__filename));