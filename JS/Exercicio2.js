var numero = prompt("Digite um numero")

divisao(numero);

function divisao() {
    resultado = numero % 2 

    if (resultado == 0) {
        alert("O numero é par")
    } else {
        alert("Esse número é impar")
    }
}