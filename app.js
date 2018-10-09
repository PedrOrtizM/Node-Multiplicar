// -----------------------------------------------------------------------------
// module es un objeto global que está disponible a lo largo de toda
// la aplicacion
// Si despues de la palabra const hay { } es una destructuración
// process no hay que definirlo, Node lo crea automaticamente
// NPM (Gestor de Paquetes de Node) INIT ->
//------------------------------------------------------------------------------


const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;
const colors = require('colors');


let comando = argv._[0];

switch (comando) {

  case 'listar':
  listarTabla(argv.base,argv.limite)
  break;

  case 'crear':
  crearArchivo(argv.base,argv.limite)
            .then(archivo => console.log(`Archivo creado ${ archivo }`))
            .catch(e => console.log(e));
  break;

  default:
  console.log('Comando no reconocido');

}



//------------------------------------------------------------------------------
 //let argv2 = process.argv;           // arreglo de parámetros
 // let parametro = argv2[2];           // posición 2 del arreglo anterior
 // let base = parametro.split('=')[1]; // split separa String por caracter (=)
//console.log('Limite',argv.limite);
//------------------------------------------------------------------------------
