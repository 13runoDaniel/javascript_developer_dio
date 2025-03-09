function verificarIdade( idade ) {
    if ( idade >= 18 ) {
        console.log(`${informarNome('Bruno Daniel')} e sou maior de idade`);
    } else {
        console.log(`${informarNome('Perry o Gato')} e sou menor de idade`);
    };
};
verificarIdade(30); // Meu nome é Bruno Daniel e sou maior de idade
verificarIdade(8); // Meu nome é Perry o Gato e sou menor de idade

function informarNome( nome ) {
    return `Meu nome é ${nome}`;
};