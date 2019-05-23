const fs = require('fs');


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${ base } No es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (error) => {
            if (error)
                reject(error)
            else {
                resolve(`tabla-${ base }.txt`);
            }
        })
    })
}

let listarTabla = (base, limite) => {
    for (let i = 0; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
};