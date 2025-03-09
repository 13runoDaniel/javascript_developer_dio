const valorCombustivel = 6.79;
const kmPorLitro = 12;
const distanciaViagem = 630;

const valorTotalViagem = (distanciaViagem / kmPorLitro) * valorCombustivel;
console.log(valorTotalViagem.toFixed(2)); // 356.48