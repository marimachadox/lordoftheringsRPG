function start() {
    var destino = prompt("1-Tentar convencer Frodo de que seguir sozinho é quase impossível, pois acha que juntos a sociedade pode chegar mais longe\n2-Entende as motivações de Frodo, sabe que a luta contra a influência do anel demanda muita força e muita vontade não deixar-se consumir pelas forças do mal, por isso seguir juntos seja muito ais perigo e por tal motivo o deixa seguir sozinho");
    if(destino == 1){
        window.location.href = "../html/gameover.html";
    }
    else if(destino == 2){
        window.location.href = "../html/passolargofinal.html";
    }
    else{
        alert("Por favor, para continuar o jogo você deverá fazer uma escolha válida!");
    }
} 