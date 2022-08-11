var numero = prompt("Digite um numero")

divisao(numero);

function divisao() {
    resultado = numero % 2 

    if (resultado == 0) {
        document.write("O numero é par")
    } else {
        document.write("Esse número é impar")
    }
}