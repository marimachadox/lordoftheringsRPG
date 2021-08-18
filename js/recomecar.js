function start() {
    var destino = prompt("Você gostaria de recomeçar?\n1-Sim\n1-Não");
    if(destino == 1){
        window.location.href = "./idex.html";
    }
    else if(destino == 2){
        window.location.href = "Poxa, tudo bem? :( Te vejo na próxima, então. Valeu por lutar até aqui!";
    }
    else{
        alert("Por favor, para continuar o jogo você deverá fazer uma escolha válida!");
    }
} 