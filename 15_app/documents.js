const fs = require('fs');
const os = require('os'); /* Permite ejecutar comandos del sistema operativo */


class Document{
    constructor(dir){
        this._content = '';
        this._isSaved = false;
        this._filename = '';
        this._dir = dir;
    }

    /*Validar si existe un archivo */
    exists(name){
        return fs.existsSync(`${this._dir}/${name}`);
    }

    /* Agregar texto al archivo */
    append(text){
        this._content += os.EOL + text;
        this._isSaved = false; 
    }

    saveAs(name){
        fs.writeFileSync(`${this._dir}/${name}`, this._content);

        this._isSaved = true;
        this._filename = name;
    }

    save(){
        fs.writeFileSync(`${this._dir}/${this._filename}`, this._content);

        this._isSaved = true;
        this._filename = this._filename;
    }

    getContent(){
        return this._content;
    }

    /* Saber si el archivo tiene nombre para saber cuál de los dos save vamos a invocar */
    hasName(){
        if(this._filename != ''){
            return true;
        }else{
            return false;
        }
    }

    getName(){
        return this._filename;
    }

    isSaved(){
        return this._isSaved;
    }

    /* Abrir archivo. Cuand se abra queremos que regrese el contenido */
    open(name){
        this._content = fs.readFileSync(`${this._dir}/${name}`, 'UTF-8');
        this._filename = name;
        this._isSaved = true;

        return this._content;
    }
}

module.exports = Document;