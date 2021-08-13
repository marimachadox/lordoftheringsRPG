function start() {
    var destino = prompt("1-Seguir seu caminho sozinho\n2-Continuar sob proteção da sociedade do anel");
    if(destino == 1){
        window.location.href = "../html/frodofinal.html";
    }
    else if(destino == 2){
        window.location.href =  "../html/gameover.html";
    }
    else{
        alert("Por favor, para continuar o jogo você deverá fazer uma escolha válida!");
    }
}