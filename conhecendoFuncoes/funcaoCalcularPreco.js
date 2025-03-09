const valorProduto = 1000;
const formDePag = 'Muitas parcelas';

if ( formDePag === 'Débito' ) {
    console.log(aplicDesc(valorProduto, 10));
} else if ( formDePag === 'Dinheiro' ) {
    console.log(aplicDesc(valorProduto, 15));
}  else if ( formDePag === 'Duas parcelas' ) {
    console.log(valorProduto);
}   else if ( formDePag === 'Muitas parcelas' ) {
    console.log(aplicAcrescimo(valorProduto, 15));
}; // 1150

function aplicDesc( valor, desconto ) {
    const valorDoPagamento = valor - (valor * (desconto / 100));
    return valorDoPagamento;
};

function aplicAcrescimo( valor, acrescimo ) {
    const valorDoPagamento = valor + (valor * (acrescimo / 100));
    return valorDoPagamento;
};