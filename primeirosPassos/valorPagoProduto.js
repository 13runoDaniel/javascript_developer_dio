const valorProduto = 7000;
const formDePag = 'Débito';

if ( formDePag === 'Débito' ) {
    const valorDoPagamento = valorProduto - (valorProduto * .10);
    console.log(`R$ ${valorDoPagamento}`);
} else if ( formDePag === 'Dinheiro' ) {
    const valorDoPagamento = valorProduto - (valorProduto * .15);
    console.log(`R$ ${valorDoPagamento}`);
}  else if ( formDePag === 'Duas parcelas' ) {
    const valorDoPagamento = valorProduto;
    console.log(`R$ ${valorDoPagamento}`);
}   else if ( formDePag === 'Muitas parcelas' ) {
    const valorDoPagamento = valorProduto + (valorProduto * .15);
    console.log(`R$ ${valorDoPagamento}`);
}; // R$ 6300