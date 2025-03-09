// ! negacao logica

const numeroPar = 10;
const verificarNumeroPar = (numeroPar % 2) === 0; // true

const numeroImpar = 13;
if ( numeroImpar % 2 === 1 ) {
    console.log('Número impar');
} else {
    console.log('Número par');
}; // Número impar

const numeroASerNegado = 14;
const negarNumeroPar = (numeroASerNegado % 2) === 0;
if ( !negarNumeroPar ) {
    console.log('Não foi negado');
} else {
    console.log('Negou o número par');
}; // Negou o número par


const idade = 16;
if ( idade >= 18 ) {
    console.log('Adulto');
} else if ( idade >= 13 ) {
    console.log('Adolescente');
} else {
    console.log('Criança');
}; // Adolescente