
var eleicao = []
var cadastro = prompt("Deseja adicionar um cidade?")

while (cadastro != "n") {
    addProduto()
    cadastro = prompt("Deseja adicionar outra cidade?")
}

function addProduto() {
    eleicao.push({
        municipio: prompt("Digite o nome da cidade:"),
        eleitores: prompt("Digite a quantidade de eleitores:"),
        qtdeVotos: prompt("Digite a quantidade de votos do canditado mais votado:")
    });
}

for (var i = 0; i < eleicao.length; i++) {
    segundoTurno = (eleicao[i].qtdeVotos * 100) / eleicao[i].eleitores
    if (segundoTurno > 50) {
        document.write('A cidade ', eleicao[i].municipio ,'  não possui 2º Turno',"</br>")
    } else {
        document.write('A cidade ', eleicao[i].municipio ,' terá 2º Turno',"</br>")
    }
}