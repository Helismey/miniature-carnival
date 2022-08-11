var lado1 = prompt("Qual do valor do primeiro lado do triângulo?")
var lado2 = prompt("Qual do valor do segundo lado do triângulo?")
var lado3 = prompt("Qual do valor do terceiro lado do triângulo?")

if (lado1 == lado2 && lado2 == lado3) {
    document.write("Trata-se de um triângulo equilátero.")
} else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
    document.write("Trata-se de um triângulo escaleno.")
} else {
    document.write("Trata-se de um triângulo isósceles.")
}