const fs = require('fs');
const path = require('path');

class Directory{
    constructor(){
        this._dir = 'docs';
        /* Interesting data you may need to know to undesrtand the next variable : 
        https://stackoverflow.com/questions/35946339/double-underscore-vs-single-underscore-in-nodejs/39620868#:~:text=As%20mentioned%20above%20answer%2C%20variable,with%20double%20underscores%20in%20node. */
        this._path = __dirname; /*(Nos da la ubicación en donde estamos)*/
        this.createDocsDir();
    }

    /* Valida la creación de directorios donde vamos a guardar los archivos */
    createDocsDir(){
        /* Esto junta ubicaciones */
        this._path = path.join(this._path, this._dir);

        if(!fs.existsSync(this._dir)){
            fs.mkdirSync(this._dir);
        }
    }

    getPath(){
        return this._path;
    }

    getShortPath(){
        const paths = path.parse(this._path);
        let delimiter = '/';

        /* Lo primero es identificar qué clase de diagonal estamos tratando */
        if(paths.dir.indexOf(delimiter) < 0){
            delimiter = `\\`;
        }

        /* Crea un string corto de la URL donde estoy */
        return `${paths.root}...${delimiter}${paths.name}`;
    }

    getFilesInDir(){
        /*Devuelve los archivos que hay dentro de esa carpeta*/
        const files = fs.readdirSync(this._path);
        let n = 0;

        console.log(`
            ====================================
            Ubicación: ${this.getShortPath()}
            ====================================`);

        files.forEach(file => {
            if(file != '.DS_Store'){
                console.log(`   ${file}`);
                n++;
            }
        })
    }
}

module.exports = Directory;