function start() {
    var destino = prompt("1-Já se arriscou demais, prefere ficar nas terras élficas, perto de sua amada e longe da influência do anel\n2-Resolve acompanhar frodo nessa jornada, sente que não tem nada a perder e essa é uma oportunidade perfeita para reafirmar sua honra e lealdade\n3-Você duvida que Frodo, um hobbit frágil e sem habilidades de luta, será capaz de ser levar o anel até seu destino, mas não diz nada e apenas se retira da reunião");
    if(destino == 1 || destino == 3){
        window.location.href = "../html/gameover.html";
    }
    else if(destino == 2){
        window.location.href = "../html/passolargo4.html";
    }
    else{
        alert("Por favor, para continuar o jogo você deverá fazer uma escolha válida!");
    }
} 