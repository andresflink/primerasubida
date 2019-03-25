const opciones = {
    nombre : {
        demand : true,
        alias : 'm'
    },
    matematicas : {
        demand : true,
        alias : 'm'
    },
    ingles : {
        demand : true,
        alias : 'i'
    },
    programcion : {
        demand : true,
        alias : 'p'
    }
};
let obtenerPromedio = (nota_1, nota_2, nota_3) => (nota_1 + nota_2 + nota_3) / 3;

const argv = require('yargs')
            .command('promedio', 'calcular el promedio', opciones)
            .argv

module.exports = {
    argv,
    obtenerPromedio
};