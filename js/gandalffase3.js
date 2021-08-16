function start() {
    var destino = prompt("1-Mesmo sabendo que a escolha não é unicamente sua, decide seguir pelo caminho que escolheu de ínicio\n2-Pede que Frodo, como portador d'O anel, escolha por onde devem seguir\n3-Sugere que a sociedade se divida em dois grupos e cada um segue por um lado");
    if(destino == 1 || destino ==3){
        window.location.href = "../html/gameover.html";
    }
    else if(destino == 2){
        window.location.href = "../html/gandalf4.html";
    }
    else{
        alert("Por favor, para continuar o jogo você deverá fazer uma escolha válida!");
    }
}