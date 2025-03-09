(function () {
    console.log('------ Iniciando sistema ------');

    const peso = 75;
    const altura = 1.66;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));

    console.log('------ Finalizando sistema ------');
})(); // Sobrepeso

function calcularImc( peso, altura ) {
    return peso / Math.pow( altura, 2 );
};

function classificarImc( imc ) {
    if ( imc <= 18.5 ) {
        return 'Baixo peso';
    } else if ( imc <= 24.9 ) {
        return 'Intervalo normal';
    } else if ( imc <= 29.9 ) {
        return 'Sobrepeso';
    } else if ( imc <= 34.9 ) {
        return 'Obesidade classe I';
    } else if ( imc <= 39.9 ) {
        return 'Obesidade classe II';
    } else {
        return 'Obesidade classe III';
    };
};