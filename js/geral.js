function start() {
    personagem = prompt ("1-Frodo\n2-Gandalf\n3-Aragorn");
    if(personagem == 1){
        return ("../html/frodo1.html")
    }
    else if(personagem == 2){
        return("../html/gandalf1.html")
    }
    else if(personagem== 3){
        return("../html/aragorn1.html")
    }
    else{
        alert("Escolha um personagem para iniciar o jogo!")
    }
}