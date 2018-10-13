const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo.blue}`))
            .catch(error => console.log(error));
        break;

    default:
        console.log('Comando no reconocido');

}
//console.log( process.argv);

// en el process existe el argv
//argv envia la ubicacion de node y la del archivo (path)
//obtener parametros desde consola

let argv2 = process.argv;

// console.log(argv.base);

// console.log(`limite : ${argv.limite} `);
// let parametro = argv[2];
// let base = parametro.split('=')[1]

//console.log(base);

