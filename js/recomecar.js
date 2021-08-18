function start() {
    var destino = prompt("Você gostaria de recomeçar?\n1-Sim\n2-Não");
    if(destino == 1){
        window.location.href = "../index.html";
    }
    else if(destino == 2){
        alert("Poxa, tudo bem! :( Te vejo na próxima, então. Valeu por lutar até aqui!");
    }
    else{
        alert("Por favor, para continuar o jogo você deverá fazer uma escolha válida!");
    }
} 