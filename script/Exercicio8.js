var carro = prompt("Qual o seu tipo de carro:")
var km = prompt("Digite a distancia:")

if (carro == "A" || carro == "a") {
    consumo = km / 8
} else if (carro == "B" || carro == "b") {
    consumo = km / 9
} else if (carro == "C" || carro == "c") {
    consumo = km / 12
} else {
    document.write("Tipo de carro inexistente")
}

document.write("O seu consumo de combustivel em litros é " + consumo)