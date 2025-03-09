const peso = 75;
const altura = 1.66;
const imc = peso / Math.pow( altura, 2 );

if ( imc <= 18.5 ) {
    console.log('Baixo peso');
} else if ( imc <= 24.9 ) {
    console.log('Intervalo normal');
} else if ( imc <= 29.9 ) {
    console.log('Sobrepeso');
} else if ( imc <= 34.9 ) {
    console.log('Obesidade classe I');
} else if ( imc <= 39.9 ) {
    console.log('Obesidade classe II');
} else {
    console.log('Obesidade classe III');
}; // Sobrepeso