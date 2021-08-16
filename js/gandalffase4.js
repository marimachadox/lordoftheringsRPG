function start() {
    var destino = prompt("1-Ficar e usar toda sua força e habilidade para lutar, sozinho\n2-Tentar fugir com outros, até que que o demônio de fogo os perca de vista\n3-Sabe que não tem força suficiente para enfrentá-lo sozinho, então pede que frodo lhe empreste o anel para que você tenha chance de lutar e igual para igual");
    if (destino == 1) {
        window.location.href = "../html/gandalf5.html";
    }
    else if (destino == 2 || destino == 3) {
        window.location.href = "../html/gameover.html";
    }
    else {
        alert("Por favor, para continuar o jogo você deverá fazer uma escolha válida!");
    }
}