const fs = require('fs');
var colors = require('colors');

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un número.`);
            return
        }

        let tabla = '';

        for (let index = 1; index <= limite; index++) {
            tabla += (`${base} * ${index} = ${base * index} \n`);
        }

        const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}

let listarTabla = (base, limite = 10) => {

    if (!Number(base) || !Number(limite)) {
        reject(`${base} o ${limite} no es un número.`);
        return
    }

    console.log('======================'.green);
    console.log(`=====Tabla de ${base}=`.green);
    console.log('======================'.green);

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index}`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}