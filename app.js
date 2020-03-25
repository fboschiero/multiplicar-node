const argv = require('./config/yargs').argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido.');


}

//let base = 'eeee';

//let argv = process.argv;
//let parametro = argv[2];

//let base = parametro.split('=')[1];