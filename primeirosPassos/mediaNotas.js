const notaA = 8;
const notaB = 10;
const notaC = 7;

const somarNotas = notaA + notaB + notaC;
const definirMedia = somarNotas / 3;
const mediaSemestre = definirMedia;

if ( mediaSemestre >= 8 ) {
    console.log('Passou de semestre');
} else if ( mediaSemestre >= 5 && mediaSemestre < 8 ) {
    console.log('Recuperação');
} else {
    console.log('Reprovação');
}; // Passou de semestre