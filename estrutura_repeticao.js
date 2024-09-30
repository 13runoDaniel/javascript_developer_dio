/* ARRAYS */
const ninjas = ['Naruto', 'Sasuke', 'Sakura'];
console.log(ninjas); // [ 'Naruto', 'Sasuke', 'Sakura' ]
//

/* ACESSAR ITEM */
console.log(ninjas[0]); //Naruto
console.log(ninjas[2]); //Sakura
//

/* ADICIONAR ITEM NO FINAL */
ninjas.push('Kakashi');
console.log(ninjas); // [ 'Naruto', 'Sasuke', 'Sakura', 'Kakashi' ]
//

/* SUBSTITUIR ITEM EM UMA POSICAO */
ninjas[3] = 'Sai';
console.log(ninjas); // [ 'Naruto', 'Sasuke', 'Sakura', 'Kakashi' ]
//

const armasNinja = [];
armasNinja.push('Kunai');
armasNinja.push('shuriken', 10);
console.log(armasNinja); // [ 'Kunai', 'shuriken', 10 ]
//

/* REMOVER ITEM NO FINAL E PEGAR O SEU VALOR */
console.log(armasNinja.pop()); // 10
console.log(armasNinja); // [ 'Kunai', 'shuriken' ]
//

/* REMOVER ITEM NO INICIO E PEGAR O SEU VALOR */
console.log(armasNinja.shift()); // Kunai
console.log(armasNinja); // [ 'shuriken' ]
//

/* EXIBIR QUANTIDADE DE ITENS (length)*/
const desempenhoNinja = [];
desempenhoNinja.push(5);
desempenhoNinja.push(8);
desempenhoNinja.push(4);
desempenhoNinja.push(9);
desempenhoNinja.push(8);
console.log(desempenhoNinja.length); // 5
//

/* ESTRUTURA DE REPETICAO (for) */
const nomeNinja = 'Kakashi Hatake';

for (let i = 0; i < nomeNinja.length; i++) {
    console.log(nomeNinja[i]);
} //  K a k a s h i   H a t a k else

console.log(desempenhoNinja); // [ 5, 8, 4, 9, 8 ]
let somaDoDesempenho = 0;

for (let i = 0; i < desempenhoNinja.length; i++) {
    const desempenho = desempenhoNinja[i];
    somaDoDesempenho += desempenho;
}
console.log(somaDoDesempenho); // 34

const mediaFinalNinja = somaDoDesempenho / desempenhoNinja.length;
console.log(mediaFinalNinja); // 6.8

/* ESTRUTURA DE REPETICAO (while) */
const listaDeNinjas = ['Guy', 'Neji', 'Tenten', 'Rock Lee'];
let inscricoes = 0;

while (inscricoes < listaDeNinjas.length) {
    console.log(`O ninja ${listaDeNinjas[inscricoes]} será inscrito`);
    inscricoes++;
} // O ninja Guy será inscrito   O ninja Neji será inscrito   O ninja Tenten será inscrito   O ninja Rock Lee será inscrito
//

/* ESTRUTURA DE REPETICAO (do while) */
const listaDeNinjasAkatsuki = ['Itachi', 'Deidara', 'Kisame', 'Pain'];
let akatsuki = 0;

do {
    console.log(`O ninja ${listaDeNinjasAkatsuki[akatsuki]} é da Akatsuki`);
    akatsuki++;
} while (akatsuki in listaDeNinjasAkatsuki); // O ninja Itachi é da Akatsuki   O ninja Deidara é da Akatsuki   O ninja Kisame é da Akatsuki   O ninja Pain é da Akatsuki
//

/* IMPRIMIR TABOADA */
for (let i = 1; i <= 10; i++) {
    console.log(i * 3); // 3   6   9   12   15   18   21   24   27   30
}
//

/* IMPRIMIR NUMEROS PARES */
const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let acharNumerosPares = 0;

for (let i = 0; i < listaDeNumeros.length; i++) {
    const numeroEncontrado = listaDeNumeros[i];
    if (numeroEncontrado % 2 === 0) {
        console.log(numeroEncontrado);
    }
}
//
