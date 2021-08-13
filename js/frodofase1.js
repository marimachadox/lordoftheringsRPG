function start() {
    var destino = prompt("1-Recusar a oferta do desconhecido?\n2-Mesmo amendrotrado, você sente que ter ajuda é melhor que ajuda alguma");
    if(destino == 1){
        window.location.href = "../html/gameover.html";
    }
    else if(destino == 2){
        window.location.href = "../html/frodo2.html";
    }
    else{
        alert("Por favor, para continuar o jogo você deverá fazer uma escolha válida!");
    }
}