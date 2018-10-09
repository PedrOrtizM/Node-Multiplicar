//requires
// require de tres tipos: Paquetes propios de Node, Personas externas, Archivos propios

const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else resolve(`tabla-${ base }.txt`);

        });


    });

}



let listarTabla = (base,limite=10) =>{

  console.log(`===| TABLA DE ${ base } |===`.green);

  for (var i = 1; i <= limite; i++) {
      console.log(`      ${ base } * ${ i } = ${base*i}`);
  }


}




// añade al modulo global la función
module.exports = {
    crearArchivo,
    listarTabla
}
