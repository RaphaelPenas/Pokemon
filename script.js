function pokemon(){
    var textescolha=document.querySelector(`#escolha`)
    var inicial=document.querySelector(`#inicial`)
    var imagempok=document.querySelector(`#imagempok`)

    var escolha=Number(textescolha.value)
    var imagem_escolhido

    inicial.innerHTML=`Você escolheu o número ${escolha} e seu pokémon será...<br><br>`

    if(escolha <=25){
        inicial.innerHTML+=`<span class ="pokemon verde">BULBASSAURO!`
        imagem_escolhido="imagem/Bulba.png"
    }
    else if(escolha <=50){
        inicial.innerHTML+=`<span class ="pokemon azul">SQUIRTLE!`
        imagem_escolhido="imagem/squir.png"
        
    }
    else if(escolha <=75){
        inicial.innerHTML+=`<span class ="pokemon vermelho">CHARMANDER!`
        imagem_escolhido="imagem/char.png"
    }

    else{
        inicial.innerHTML+=`<span class ="pokemon amarelo">PIKACHU!`
        imagem_escolhido="imagem/Pikachu.png"
    }

    imagempok.src = imagem_escolhido;
    imagempok.style.display = "block";
}