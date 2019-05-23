const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const argv = require('yargs')
    .command('listar', 'Imprime en consola las tablas', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alas: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea archivos con tablas de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            default: 10,
            alias: 'l'
        }
    })
    .argv;

let comando = argv._[0];

console.log(comando);

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e))
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('El comando no se reconoce');
}

console.log('argv', argv);
// console.log('argv2', argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];