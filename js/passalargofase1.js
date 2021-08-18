function start() {
    var destino = prompt("1-Como guardião, oferece ao Hobbit e seus amigos, sua ajuda e proteção\n2-Como herdeiro direto do reino e do homem que derrotou Sauron, você exige que o Hobbit lhe dê a posse do anel\n3-Você não se revela, nem oferece ajuda, fica observando o hobbit de longe esperando-o vacilar para pegar o anel");
    if(destino == 2 || destino == 3){
        window.location.href = "../html/gameover.html";
    }
    else if(destino == 1){
        window.location.href = "../html/passalargo2.html";
    }
    else{
        alert("Por favor, para continuar o jogo você deverá fazer uma escolha válida!");
    }
} 