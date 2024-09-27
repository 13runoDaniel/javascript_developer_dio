/* ESTRUTURA OBJETO LITERAL (abstracao = {atributo: })*/
const bruno = {
    nome: 'Bruno Daniel',
    idade: 30,
};
console.log(bruno); // { nome: 'Bruno Daniel', idade: 30 }
console.log(bruno.nome); // Bruno Daniel
console.log(bruno.idade); // 30
//

/* INSERIR VALOR */
bruno.altura = 1.66;
console.log(bruno); // { nome: 'Bruno Daniel', idade: 30, altura: 1.66 }
//

/* EXCLUIR VALOR (delete)*/
delete bruno.idade;
console.log(bruno); // { nome: 'Bruno Daniel', altura: 1.66 }
//

/* METODO (metodo: function () {}*/
const apresenteSe = {
    nome: 'Perry',
    idade: 6,
    passatempo: 'ficar em casa',

    iraSeApresentar: function () {
        console.log(
            `Meu nome é ${this.nome} eu tenho ${this.idade} anos e gosto de ${this.passatempo}`
        );
    },
};
apresenteSe.iraSeApresentar(); // Meu nome é Perry eu tenho 6 anos e gosto de ficar em casa

apresenteSe.nome = 'Eliana';
apresenteSe.idade = 52;
apresenteSe.passatempo = 'dormir';
apresenteSe.iraSeApresentar = function () {
    console.log(
        `Eu tenho ${this.idade} anos, gosto de ${this.passatempo} e meu nome é ${this.nome}`
    );
};
apresenteSe.iraSeApresentar(); // Eu tenho 52 anos, gosto de dormir e meu nome é Eliana
//

/* ACESSAR DINAMICAMENTE */
const atributoIdade = 'idade';
const atributoNome = 'nome';
console.log(apresenteSe[atributoIdade]); // 52
console.log(apresenteSe[atributoNome]); // Eliana
//

/* ALTERAR DADOS DINAMICAMENTE */
apresenteSe['nome'] = 'Oswaldo';
console.log(apresenteSe); // { nome: 'Oswaldo', idade: 52, altura: dormir, iraSeApresentar: [Function (anonymous)]}
//

/* CLASSE (Classe {atributo: }) */
class Pessoa {
    nome;
    idade;
    passatempo;

    descrever() {
        console.log(
            `Meu nome é ${this.nome} eu tenho ${this.idade} anos e gosto de ${this.passatempo}`
        );
    }
}

/* INSTANCIA */
const pessoa_1 = new Pessoa();
pessoa_1.nome = 'Bruno Daniel de Assis';
pessoa_1.idade = 30;
pessoa_1.passatempo = 'Jogar videogame';
console.log(pessoa_1); // Pessoa { nome: 'Bruno Daniel de Assis', idade: 30, passatempo: 'Jogar videogame'}
pessoa_1.descrever(); // Meu nome é Bruno Daniel de Assis eu tenho 30 anos e gosto de Jogar videogame

const pessoa_2 = new Pessoa();
pessoa_2.nome = 'Eliana de Assis';
pessoa_2.idade = 52;
pessoa_2.passatempo = 'Dormir';
console.log(pessoa_2); //Pessoa { nome: 'Eliana de Assis', idade: 52, passatempo: 'Dormir' }
pessoa_2.descrever(); // Meu nome é Eliana de Assis eu tenho 52 anos e gosto de Dormir
//

/* CONSTRUCTOR (constructor(atributo, atributo_1) {this.atributo = } */
class PessoaConstructor {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    iraSeDescrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const pessoaConstructor_1 = new PessoaConstructor('Bruno', 30);
pessoaConstructor_1.iraSeDescrever(); // Meu nome é Bruno e minha idade é 30
console.log(pessoaConstructor_1); // PessoaConstructor { nome: 'Bruno', idade: 30, anoDeNascimento: 1994 }
//

/* COMPARAR OBJETO */
class DeclararPessoa {
    nome;
    idade;
    olhos;
    cabelo;

    constructor(nome, idade, olhos, cabelo) {
        this.nome = nome;
        this.idade = idade;
        this.olhos = olhos;
        this.cabelo = cabelo;
    }

    falarSobreSi() {
        console.log(
            `Meu nome é ${this.nome}, tenho ${this.idade} anos de idade, meus olhos são da cor ${this.olhos}, e meu cabelo é da cor ${this.cabelo}`
        );
    }
}

const declararPessoa_1 = new DeclararPessoa('Bruno', 30, 'castanhos', 'preto');
declararPessoa_1.falarSobreSi(); // Meu nome é Bruno, tenho 30 anos de idade, meus olhos são da cor castanhos, e meu cabelo é da cor preto

const declararPessoa_2 = new DeclararPessoa('Eliana', 52, 'verde claro', 'loira');
declararPessoa_2.falarSobreSi(); // Meu nome é Eliana, tenho 52 anos de idade, meus olhos são da cor verde claro, e meu cabelo é da cor loira

const declararPessoa_3 = new DeclararPessoa('Perry', 6, 'verde', 'várias cores');
declararPessoa_3.falarSobreSi(); // Meu nome é Perry, tenho 6 anos de idade, meus olhos são da cor verde, e meu cabelo é da cor várias cores

function compararPessoas(pessoa_1, pessoa_2) {
    if (pessoa_1.idade > pessoa_2.idade) {
        console.log(`${pessoa_1.nome} é mais velho(a) que o(a) ${pessoa_2.nome}`);
    } else if (pessoa_2.idade > pessoa_1.idade) {
        console.log(`${pessoa_2.nome} é mais velho(a) que o(a) ${pessoa_1.nome}`);
    } else {
        console.log(`${pessoa_2.nome} e ${pessoa_1.nome} tem a mesma idade`);
    }
}
compararPessoas(declararPessoa_1, declararPessoa_2); // Eliana é mais velho(a) que o(a) Bruno
//

/* CALCULANDO GASTO DE VIAGEM */
class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    valorGastoDeTrajeto = function (totalKmDestino, precoCombustivel) {
        const gastoViagemPorKm = totalKmDestino * this.gastoMedioPorKm * precoCombustivel;

        return gastoViagemPorKm;
    };
}

const carro_1 = new Carros('VolksWagen', 'preto', 1 / 10);
console.log(carro_1.valorGastoDeTrajeto(70, 5.89)); // 41.23

const carro_2 = new Carros('Honda', 'prata', 1 / 7);
console.log(carro_2.valorGastoDeTrajeto(70, 5.89)); // 58.9
//

/* CALCULANDO VALOR IMC */
class GrupoDePessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    informarImc = function () {
        const calcularImc = this.peso / (this.altura * this.altura);

        return calcularImc;
    };

    classificarImc = function () {
        const imc = this.informarImc();

        if (imc <= 18.4) {
            console.log(`${this.nome} está abaixo do peso ideal`);
        } else if (imc >= 18.5 && imc <= 24.9) {
            console.log(`${this.nome} está com o peso ideal`);
        } else if (imc >= 25 && imc <= 29.9) {
            console.log(`${this.nome} está com sobrepeso`);
        } else if (imc >= 30 && imc <= 34.9) {
            console.log(`${this.nome} está com obesidade grau I`);
        } else if (imc >= 35 && imc <= 39.9) {
            console.log(`${this.nome} está com obesidade grau II`);
        } else {
            console.log(`${this.nome} está com obesidade grau III`);
        }
    };
}

const grupoDePessoa_1 = new GrupoDePessoas('Barbara', 70, 1.6);
console.log(
    `O valor do IMC do(a) ${grupoDePessoa_1.nome} é ${grupoDePessoa_1.informarImc().toFixed(2)}`
); // O valor do IMC do(a) Barbara é 27.34
grupoDePessoa_1.classificarImc(); // Barbara está com sobrepeso

const grupoDePessoa_2 = new GrupoDePessoas('Bruno', 75, 1.66);
console.log(
    `O valor do IMC do(a) ${grupoDePessoa_2.nome} é ${grupoDePessoa_2.informarImc().toFixed(2)}`
); // O valor do IMC do(a) Bruno é 27.22
grupoDePessoa_2.classificarImc(); // Bruno está com sobrepeso

const grupoDePessoa_3 = new GrupoDePessoas('Perry', 6, 1);
console.log(
    `O valor do IMC do(a) ${grupoDePessoa_3.nome} é ${grupoDePessoa_3.informarImc().toFixed(2)}`
); // O valor do IMC do(a) Perry é 6.00
grupoDePessoa_3.classificarImc(); // Perry está abaixo do peso ideal

const grupoDePessoa_4 = new GrupoDePessoas('José', 70, 1.75);
console.log(
    `O valor do IMC do(a) ${grupoDePessoa_4.nome} é ${grupoDePessoa_4.informarImc().toFixed(2)}`
); // O valor do IMC do(a) José é 22.86
grupoDePessoa_4.classificarImc(); // José está com o peso ideal
