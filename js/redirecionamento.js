function startfrodo() {
    var escolha = prompt("Tem certeza da sua escolha?\n1-Para sim\n2-Para não")
    if (+escolha === 1) {
        window.location.href = "./html/frodo1.html";
    }
    else if (+escolha === 2) {
        alert("Ok, você pode selecionar outro personagem!")
    }
    else {
        alert("Por favor, insira uma numeração válida! :P")
    }
}
function startgandalf() {
    var escolha = prompt("Tem certeza da sua escolha?\n1-Para sim\n2-Para não")
    if (+escolha === 1) {
        window.location.href = "./html/gandalf1.html";
    }
    else if (+escolha === 2) {
        alert("Ok, você pode selecionar outro personagem!")
    }
    else {
        alert("Por favor, insira uma numeração válida! :P")
    }

}
function startstreed() {
    var escolha = prompt("Tem certeza da sua escolha?\n1-Para sim\n2-Para não")
    if (+escolha === 1) {
        window.location.href = "./html/passolargo1.html";
    }
    else if (+escolha === 2) {
        alert("Ok, você pode selecionar outro personagem!")
    }
    else {
        alert("Por favor, insira uma numeração válida! :P")
    }
}