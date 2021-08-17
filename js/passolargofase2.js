function start() {
    var destino = prompt("1-Deixa que Arwen o leve\n2-Pede que ela fique com Sam, Merry e Pippy, enquanto você segue na frente com Frodo");
    if(destino == 2){
        window.location.href = "../html/gameover.html";
    }
    else if(destino == 1){
        window.location.href = "../html/passolargo3.html";
    }
    else{
        alert("Por favor, para continuar o jogo você deverá fazer uma escolha válida!");
    }
} 