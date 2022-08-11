var propProdutos = []
var cadastro = prompt('Deseja adicionar produtos')

while (cadastro != "n") {
    addProduto()
    cadastro = prompt("Deseja adicionar outro produto?")
    if (cadastro == 'n') {
        var desconto = prompt("Qual o valor total de desconto?");
    }
}

function addProduto() {
    propProdutos.push({
        codigo: prompt("Código do produto: "),
        qtde: prompt("Quantidade: "),
        vlrUnitario: prompt("Valor Unitario: "),
        vlrBruto: NaN,
        vlrDesconto: NaN,
        vlrLiquido: NaN
    });
}


for (i = 0; i < propProdutos.length; i++) {
    propProdutos[i].vlrBruto = propProdutos[i].vlrUnitario * propProdutos[i].qtde
    var total = total + propProdutos[i].vlrBruto
    console.log(total)

    propProdutos[i].vlrDesconto = desconto * ((total * 100) / propProdutos[i].vlrBruto)

    propProdutos[i].vlrLiquido = propProdutos[i].vlrBruto - propProdutos[i].vlrDesconto
}

console.log(propProdutos[0])
console.log(propProdutos[1])


