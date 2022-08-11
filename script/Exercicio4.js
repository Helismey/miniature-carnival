var custo = Number(prompt("Qual o valor de compra do produto?"))

if (custo < 200) {
    var precoVenda = custo + (custo * 0.5)
} else {
    var precoVenda = custo + (custo * 0.3)
}

document.write("O seu preço de venda é " + precoVenda)