var propProdutos = []
var cadastro
var total = 0

while (cadastro != "n" && cadastro != "N") {
    addProduto()
    cadastro = prompt("Deseja adicionar outro produto? Digite N para não.")
}

if (cadastro == 'n' || cadastro == 'N') {
    var desconto = prompt("Qual o valor total de desconto?");
}

function addProduto() {
    propProdutos.push({
        codigo: prompt("Código do produto: "),
        qtde: prompt("Quantidade: "),
        vlrUnitario: prompt("Valor Unitario: "),
        vlrBruto: "",
        vlrDesconto: "",
        vlrLiquido: ""
    });
}

for (i = 0; i < propProdutos.length; i++) {
    propProdutos[i].vlrBruto = propProdutos[i].vlrUnitario * propProdutos[i].qtde
    total += propProdutos[i].vlrBruto
}

for (i = 0; i < propProdutos.length; i++) {
    propProdutos[i].vlrDesconto = (desconto * (((propProdutos[i].vlrBruto * 100) / total)/100)).toFixed(2)

    propProdutos[i].vlrLiquido = (propProdutos[i].vlrBruto - propProdutos[i].vlrDesconto).toFixed(2)

    document.writeln('O produto de codigo '+ propProdutos[i].codigo + ' deu entrada de ' + propProdutos[i].qtde + 
    ' unidades, no valor unitario de R$ ' + propProdutos[i].vlrUnitario + ' dando o valor total de ' + propProdutos[i].vlrBruto + 
    ', porem foi concedido um desconto de R$ ' + propProdutos[i].vlrDesconto+ ' sendo que o total final com os descontos é de R$' + propProdutos[i].vlrLiquido + ".</br></br>")
}




