// = Atribuir
// == Verificar igualdade
// === Verificar igualdade e tipo
//

console.log('Imprime no console');
console.warn('Aviso');
console.error('Error');
console.info('Informar');
//

let variavelMutavel = 5; // Pode mudar o valor da variável
const variavelImutavel = 10; // Não pode mudar o valor da variável
//

/* CALCULO GASTO COM VIAGEM */
const valorCombustivel = 5.79;
const litrosPorKm = 12;
const distanciaKm = 300;

const gastoPorViagem = distanciaKm / litrosPorKm;
const gastoTotalViagem = gastoPorViagem * valorCombustivel;

console.log(gastoTotalViagem); // 144.75
//

/* VERIFICANDO BOOLEANO (true false)*/
const numero = 10;
const numeroPar = numero % 2 === 0;
console.log(numeroPar); // true

const numero_1 = 5;
const numeroPar_1 = numero_1 % 2 === 0;
console.log(numeroPar_1); // false
//

/* CONDICIONAL DE IDADE (if else) */
if (numero % 2 === 0) {
    console.log('Número par');
} else {
    console.log('Número impar');
} // Número par

if (numero_1 % 2 === 0) {
    console.log('Número par');
} else {
    console.log('Número impar');
} // Número impar

let idade = 18;

if (idade > 17) {
    console.info('Adulto');
} else if (idade > 15) {
    console.warn('Adolescente');
} else {
    console.error('Criança');
} // Adulto

idade = 16;

if (idade > 17) {
    console.info('Adulto');
} else if (idade >= 15) {
    console.warn('Adolescente');
} else {
    console.error('Criança');
} // Adolescente

idade = 13;

if (idade > 17) {
    console.info('Adulto');
} else if (idade > 15) {
    console.warn('Adolescente');
} else {
    console.error('Criança');
} // Criança
//

/* CALCULO GASTO COM VIAGEM (if, else if, else)*/
const valorEtanol = 3.79;
const valorGasolina = 5.89;
let abastecerVeiculo = 'Carro sem combustível';
const consumoDoVeiculo = 10;
const distanciaDestino = 100;

abastecerVeiculo = valorEtanol; // 37.9
abastecerVeiculo = valorGasolina; // 58.9

if (abastecerVeiculo == valorEtanol) {
    const abastecidoComEtanol = abastecerVeiculo;
    const gastoViagemEtanol = distanciaDestino / consumoDoVeiculo;
    const gastoTotalViagemEtanol = gastoViagemEtanol * abastecidoComEtanol;

    console.log(gastoTotalViagemEtanol);
} else if (abastecerVeiculo == valorGasolina) {
    const abastecidoComGasolina = abastecerVeiculo;
    const gastoViagemGasolina = distanciaDestino / consumoDoVeiculo;
    const gastoTotalViagemGasolina = gastoViagemGasolina * abastecidoComGasolina;

    console.log(gastoTotalViagemGasolina);
} else {
    console.error(abastecerVeiculo);
}
//

/* CALCULO DE MÉDIA */
const notaMatematicaAluno = 10;
const notaPortuguesAluno = 8;
const notaBiologiaAluno = 6;
const calculoNotaAluno = (notaMatematicaAluno + notaPortuguesAluno + notaBiologiaAluno) / 3;
const mediaFinalAluno = calculoNotaAluno;

if (calculoNotaAluno >= 7) {
    console.info('Aluno APROVADO');
} else if (calculoNotaAluno >= 5) {
    console.warn('Aluno de RECUPERAÇÃO');
} else {
    console.error('Aluno REPROVADO');
} // Aluno APROVAD
console.log(`A nota foi ${mediaFinalAluno.toFixed(2)}`); // A nota foi 8.00

const notaMatematicaAluno_1 = 3;
const notaPortuguesAluno_1 = 8;
const notaBiologiaAluno_1 = 6;
const calculoNotaAluno_1 = (notaMatematicaAluno_1 + notaPortuguesAluno_1 + notaBiologiaAluno_1) / 3;
const mediaFinalAluno_1 = calculoNotaAluno_1;

if (calculoNotaAluno_1 >= 7) {
    console.info('Aluno APROVADO');
} else if (calculoNotaAluno_1 >= 5) {
    console.warn('Aluno de RECUPERAÇÃO');
} else {
    console.error('Aluno REPROVADO');
} // Aluno RECUPERAÇÃO
console.log(`A nota foi ${mediaFinalAluno_1.toFixed(2)}`); // A nota foi 5.67

const notaMatematicaAluno_2 = 7;
const notaPortuguesAluno_2 = 2;
const notaBiologiaAluno_2 = 2;
const calculoNotaAluno_2 = (notaMatematicaAluno_2 + notaPortuguesAluno_2 + notaBiologiaAluno_2) / 3;
const mediaFinalAluno_2 = calculoNotaAluno_2;

if (calculoNotaAluno_2 >= 7) {
    console.info('Aluno APROVADO');
} else if (calculoNotaAluno_2 >= 5) {
    console.warn('Aluno de RECUPERAÇÃO');
} else {
    console.error('Aluno REPROVADO');
} // Aluno REPROVADO
console.log(`A nota foi ${mediaFinalAluno_2.toFixed(2)}`); // A nota foi 3.67
//

/* CALCULO DE IMC */
const pesoPessoa = 34;
const alturaPessoa = 1.73;
const imc = pesoPessoa / Math.pow(alturaPessoa, 2); // 'Math' é um objeto/classe, 'pow' é uma função.
Math.pow(alturaPessoa, 2); // 11.36

if (imc <= 18.5) {
    console.error('ABAIXO do peso');
} else if (imc > 18.5 && imc <= 24.9) {
    console.info('peso NORMAL');
} else if (imc > 24.9 && imc <= 29.9) {
    console.warn('SOBREPESO');
} else if (imc > 29.9 && imc <= 34.9) {
    console.warn('OBESIDADE');
} else if (imc > 34.9 && imc <= 39.9) {
    console.error('OBESIDADE MÉDIA');
} else {
    console.error('OBESIDADE GRAVE');
}
console.log(imc.toFixed(2)); // ABAIXO do peso

const pesoPessoa_1 = 65;
const alturaPessoa_1 = 1.73;
const imc_1 = pesoPessoa_1 / Math.pow(alturaPessoa_1, 2); // 'Math' é um objeto/classe, 'pow' é uma função.
Math.pow(alturaPessoa, 2); // 21.72

if (imc_1 <= 18.5) {
    console.error('ABAIXO do peso');
} else if (imc_1 > 18.5 && imc_1 <= 24.9) {
    console.info('peso NORMAL');
} else if (imc_1 > 24.9 && imc_1 <= 29.9) {
    console.warn('SOBREPESO');
} else if (imc_1 > 29.9 && imc_1 <= 34.9) {
    console.warn('OBESIDADE');
} else if (imc_1 > 34.9 && imc_1 <= 39.9) {
    console.error('OBESIDADE MÉDIA');
} else {
    console.error('OBESIDADE GRAVE');
}
console.log(imc_1.toFixed(2)); // peso NORMAL

const pesoPessoa_2 = 75;
const alturaPessoa_2 = 1.66;
const imc_2 = pesoPessoa_2 / Math.pow(alturaPessoa_2, 2); // 'Math' é um objeto/classe, 'pow' é uma função.
Math.pow(alturaPessoa, 2); // 27.22

if (imc_2 <= 18.5) {
    console.error('ABAIXO do peso');
} else if (imc_2 > 18.5 && imc_2 <= 24.9) {
    console.info('peso NORMAL');
} else if (imc_2 > 24.9 && imc_2 <= 29.9) {
    console.warn('SOBREPESO');
} else if (imc_2 > 29.9 && imc_2 <= 34.9) {
    console.warn('OBESIDADE');
} else if (imc_2 > 34.9 && imc_2 <= 39.9) {
    console.error('OBESIDADE MÉDIA');
} else {
    console.error('OBESIDADE GRAVE');
}
console.log(imc_2.toFixed(2)); // SOBREPESO

const pesoPessoa_3 = 108;
const alturaPessoa_3 = 1.8;
const imc_3 = pesoPessoa_3 / Math.pow(alturaPessoa_3, 2); // 'Math' é um objeto/classe, 'pow' é uma função.
Math.pow(alturaPessoa, 2); // 33.33

if (imc_3 <= 18.5) {
    console.error('ABAIXO do peso');
} else if (imc_3 > 18.5 && imc_3 <= 24.9) {
    console.info('peso NORMAL');
} else if (imc_3 > 24.9 && imc_3 <= 29.9) {
    console.warn('SOBREPESO');
} else if (imc_3 > 29.9 && imc_3 <= 34.9) {
    console.warn('OBESIDADE');
} else if (imc_3 > 34.9 && imc_3 <= 39.9) {
    console.error('OBESIDADE MÉDIA');
} else {
    console.error('OBESIDADE GRAVE');
}
console.log(imc_3.toFixed(2)); // OBESIDADE

const pesoPessoa_4 = 102;
const alturaPessoa_4 = 1.64;
const imc_4 = pesoPessoa_4 / Math.pow(alturaPessoa_4, 2); // 'Math' é um objeto/classe, 'pow' é uma função.
Math.pow(alturaPessoa, 2); // 37.92

if (imc_4 <= 18.5) {
    console.error('ABAIXO do peso');
} else if (imc_4 > 18.5 && imc_4 <= 24.9) {
    console.info('peso NORMAL');
} else if (imc_4 > 24.9 && imc_4 <= 29.9) {
    console.warn('SOBREPESO');
} else if (imc_4 > 29.9 && imc_4 <= 34.9) {
    console.warn('OBESIDADE');
} else if (imc_4 > 34.9 && imc_4 <= 39.9) {
    console.error('OBESIDADE MÉDIA');
} else {
    console.error('OBESIDADE GRAVE');
}
console.log(imc_4.toFixed(2)); // OBESIDADE MÉDIA

const pesoPessoa_5 = 182;
const alturaPessoa_5 = 1.58;
const imc_5 = pesoPessoa_5 / Math.pow(alturaPessoa_5, 2); // 'Math' é um objeto/classe, 'pow' é uma função.
Math.pow(alturaPessoa, 2); // 72.90

if (imc_5 <= 18.5) {
    console.error('ABAIXO do peso');
} else if (imc_5 > 18.5 && imc_5 <= 24.9) {
    console.info('peso NORMAL');
} else if (imc_5 > 24.9 && imc_5 <= 29.9) {
    console.warn('SOBREPESO');
} else if (imc_5 > 29.9 && imc_5 <= 34.9) {
    console.warn('OBESIDADE');
} else if (imc_5 > 34.9 && imc_5 <= 39.9) {
    console.error('OBESIDADE MÉDIA');
} else {
    console.error('OBESIDADE GRAVE');
}
console.log(imc_5.toFixed(2)); // OBESIDADE GRAVE
//

/* CALCULO PAGAMENTO DE PRODUTO */
const valorProduto = 300;

const pagamentoDebito = valorProduto - valorProduto * 0.1;
console.log(pagamentoDebito); // 270

const pagamentoDinheiro = valorProduto - valorProduto * 0.15;
console.log(pagamentoDinheiro); // 255

const pagamentoDuasParcelas = valorProduto;
console.log(pagamentoDuasParcelas); // 300

const pagamentoParcelado = valorProduto + valorProduto * 0.1;
console.log(pagamentoParcelado); // 330
//
