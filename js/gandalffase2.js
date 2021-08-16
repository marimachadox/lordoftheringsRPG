function start() {
    var destino = prompt("1-Juntar-se à Sauruman\n2-Recusar a oferta de Sauruman");
    if(destino == 1){
        window.location.href = "../html/gameover.html";
    }
    else if(destino == 2){
        window.location.href = "../html/gandalf3.html";
    }
    else{
        alert("Por favor, para continuar o jogo você deverá fazer uma escolha válida!");
    }
}