var salarioBruto = prompt("Digite o valor do salário bruto:")

if (salarioBruto < 2000) {
    liquido = salarioBruto - (salarioBruto * 0.1)
} else {
    liquido = salarioBruto - (salarioBruto * 0.2)
}

document.write("O seu salario liquido é " + liquido)