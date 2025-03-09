const valorGasolina = 6.79;
const valorEtanol = 4.89;
const kmPorLitro = 12;
const distanciaViagem = 630;
const tipoDeCombustivel = 'Gasolina';
const gastoPorLitros = distanciaViagem / kmPorLitro;

if ( tipoDeCombustivel === 'Etanol' ) {
    const valorGastoComEtanol = gastoPorLitros * valorEtanol;
    console.log(valorGastoComEtanol.toFixed(2));
} else {
    const valorGastoComGasolina = gastoPorLitros * valorGasolina;
    console.log(valorGastoComGasolina.toFixed(2));
}; // 356.48