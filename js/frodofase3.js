function start() {
    var destino = prompt("1-Aceitar sugestão?\n2-Recusar Sugestão");
    if(destino == 1){
        window.location.href = "../html/frodo4.html";
    }
    else if(destino == 2){
        window.location.href =  "../html/gameover.html";
    }
    else{
        alert("Por favor, para continuar o jogo você deverá fazer uma escolha válida!");
    }
}