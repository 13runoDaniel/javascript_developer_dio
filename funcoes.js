/* FUNCAO PROCEDIMENTO */
function teste() {
    console.log('Teste');
}
teste(); // Teste
//

/* FUNCAO COM PARAMETRO */
function meuNome(nome) {
    console.log('Meu nome é ' + nome);
}
meuNome('Bruno'); // Meu nome é Bruno
//

/* FUNCAO COM RETORNO (return) */
function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez); // 100
console.log(quadrado(10) + quadrado(10)); // 200
//

/* INCREMENTAR JUROS */
function incrementarJuros(valor, percentualJuros) {
    const valorDoAcrescimto = (percentualJuros / 100) * valor;
    return valor + valorDoAcrescimto;
}
console.log(incrementarJuros(100, 10)); // 110
//

/* CALCULO DE IMC (funcoes isoladas) */
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imcBase) {
    if (imcBase <= 18.5) {
        return 'ABAIXO do peso';
    } else if (imcBase > 18.5 && imcBase <= 24.9) {
        return 'peso NORMAL';
    } else if (imcBase > 24.9 && imcBase <= 29.9) {
        return 'SOBREPESO';
    } else if (imcBase > 29.9 && imcBase <= 34.9) {
        return 'OBESIDADE';
    } else if (imcBase > 34.9 && imcBase <= 39.9) {
        return 'OBESIDADE MÉDIA';
    } else {
        return 'OBESIDADE GRAVE';
    }
}

function main() {
    const imc = calcularImc(75, 1.66);
    const classificar = classificarImc(imc);
    console.log(imc.toFixed(2));
    console.log(classificar);
}
main(); // 27.22 - SOBREPESO

function main_1() {
    const imc = calcularImc(51, 1.6);
    const classificar = classificarImc(imc);
    console.log(imc.toFixed(2));
    console.log(classificar);
}
main_1(); // 19.92 - peso NORMAL

function main_2() {
    const imc = calcularImc(163, 1.8);
    const classificar = classificarImc(imc);
    console.log(imc.toFixed(2));
    console.log(classificar);
}
main_2(); // 50.31 - OBESIDADE
//

const main_3 = main_2;
main_3(); // 50.31 - OBESIDADE
//

/* INVOCADA IMEDIATAMENTE () */
(function () {
    const imc = calcularImc(35, 1.33);
    const classificar = classificarImc(imc);
    console.log(imc.toFixed(2));
    console.log(classificar);
})(); // 19.79 - peso NORMAL
//

/* INFORMAR NOME */
function informarMeuNome(nome) {
    console.log('Meu nome é ' + nome);
}
informarMeuNome('Bruno Daniel'); // Bruno Daniel
//

/* VERIFICAR IDADE */
function eMaiorDeIdade(idade) {
    if (idade >= 18) {
        console.log('É maior de idade');
    } else {
        console.log('É menor de idade');
    }
}
eMaiorDeIdade(30); // É maior de idade
eMaiorDeIdade(16); // É menor de idade
//

/* INFORMAR NOME E SE É MAIOR OU MENOR DE IDADE */
function seuNome(nome) {
    return nome;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(seuNome('Perry') + ' é maior de idade');
    } else {
        console.log(seuNome('Perry') + ' é menor de idade');
    }
}
verificarIdade(6); // Perry é menor de idade
//

/* CALCULO DE DESCONTO */
function pagamentoEmDebito(valorDoProduto) {
    return valorDoProduto - valorDoProduto * 0.1;
}

function pagamentoEmDinheiro(valorDoProduto) {
    return valorDoProduto - valorDoProduto * 0.15;
}

function pagamentoEmDuasParcelas(valorDoProduto) {
    return valorDoProduto;
}

function pagamentoEmMuitasParcelas(valorDoProduto) {
    return valorDoProduto + valorDoProduto * 0.1;
}

function aplicandoDesconto(produto, formaDePagamento) {
    const pagamentoDebito = 1;
    const pagamentoDinheiro = 2;
    const pagamentoDuasParcelas = 3;

    if (formaDePagamento === pagamentoDebito) {
        console.log(pagamentoEmDebito(produto));
    } else if (formaDePagamento === pagamentoDinheiro) {
        console.log(pagamentoEmDinheiro(produto));
    } else if (formaDePagamento === pagamentoDuasParcelas) {
        console.log(pagamentoEmDuasParcelas(produto));
    } else {
        console.log(pagamentoEmMuitasParcelas(produto));
    }
}
aplicandoDesconto(300, 1); // 270
aplicandoDesconto(300, 2); // 255
aplicandoDesconto(300, 3); // 300
aplicandoDesconto(300); // 330

function calcularDesconto(valor, desconto) {
    return valor - (valor * desconto) / 100;
}

function calcularJuros(valor, juros) {
    return valor + (valor * juros) / 100;
}

function aplicarDesconto(valorProduto, formaDePagamento) {
    const pagamentoFeitoEmDebito = 1;
    const pagamentoFeitoEmDinheiro = 2;
    const pagamentoFeitoEmDuasVezes = 3;

    if (formaDePagamento === pagamentoFeitoEmDebito) {
        console.log(calcularDesconto(valorProduto, 10));
    } else if (formaDePagamento === pagamentoFeitoEmDinheiro) {
        console.log(calcularDesconto(valorProduto, 15));
    } else if (formaDePagamento === pagamentoFeitoEmDuasVezes) {
        console.log(valorProduto);
    } else {
        console.log(calcularJuros(valorProduto, 10));
    }
}
aplicarDesconto(100, 1); // 90
aplicarDesconto(200, 2); // 170
aplicarDesconto(300, 3); // 300
aplicarDesconto(400); // 440
//
