var vlrCompra = prompt("Qual o total da compra?")
var vlrPagamento = prompt("Qual o valor pago?")

if (vlrCompra == vlrPagamento) {
    alert("Não necessita de troco")
} else if (vlrCompra < vlrPagamento ) {
    alert("Valor pago MENOR que o valor da compra.")
} else {
    nota100 = Math.floor((vlrPagamento - vlrCompra) / 100)
    resto100 = (vlrPagamento - vlrCompra) % 100
    nota10 = Math.floor(resto100 / 10)
    resto10 = resto100 % 10
    nota1 = Math.floor(resto10 / 1)
    alert("Você deve passa " + nota100 + " notas de 100, " + nota10 + " notas de 10 e " + nota1 + " notas 1.")
}