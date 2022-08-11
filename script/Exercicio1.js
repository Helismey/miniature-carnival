var numero = prompt("Digite um numero")

divisao(numero);

function divisao() {
    resultado = numero % 5 

    if (resultado == 0) {
        document.write("O numero é divisivel por 5")
    } else {
        document.write("Esse número não é divisivel por 5")
    }
}