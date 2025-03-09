function verificarIdade( idade ) {
    if ( idade >= 18 ) {
        console.log('É maior de idade');
    } else {
        console.log('É menor de idade');
    };
};
verificarIdade(30); // É maior de idade
verificarIdade(8); // É menor de idade