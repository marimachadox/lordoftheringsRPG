function start() {
    var destino = prompt("1-Se oferecer para levar o anel até Moror\n2-Só quer voltar para casa, então aproveita-se daquela confusão para fugir!");
    if(destino == 1){
        window.location.href = "../html/frodo3.html";
    }
    else if(destino == 2){
        window.location.href =  "../html/gameover.html";
    }
    else{
        alert("Por favor, para continuar o jogo você deverá fazer uma escolha válida!");
    }
}