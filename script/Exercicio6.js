var numero = [];

for (var i = 0; i < 3; i++) {
    numero[i] = prompt("Informe o número: ");  
}

for (var i = 0; i < 3; i++) {
    numero.sort();
    document.writeln(numero[i]);
}