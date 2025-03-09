function teste() {
    console.log('Função teste');
};
teste(); // Função teste

function testeComParametro( parametroNome ) {
    console.log(`Meu nome é ${parametroNome}`);
};
testeComParametro('Bruno Daniel'); // Meu nome é Bruno Daniel

function retornarValorQuadrado( valor ) {
    return valor * valor;
};

const quadradoDeNum = retornarValorQuadrado(8);
console.log(quadradoDeNum); // 64

const dobrarQuadradoDeNum = ( retornarValorQuadrado(10) + retornarValorQuadrado(10) );
console.log(dobrarQuadradoDeNum); // 200

function incrementarJuros( valor, percentualJuros ) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valorDeAcrescimo + valor;
};
console.log(incrementarJuros(100, 10)); // 110
console.log(incrementarJuros(100, 15)); // 115
console.log(incrementarJuros(100, 20)); // 120