let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextotela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function mensagemInicial(){
    exibirTextotela("h1", "Jogo do numero secreto");
    exibirTextotela("p", "Escolha um numero entre 1 e 10");
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto){
        exibirTextotela("h1", "Acertou!");

        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Voce descobriu o numeor secreto com ${tentativas} ${palavraTentativa};`

        exibirTextotela("p", mensagemTentativas);

        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        if(chute > numeroSecreto){
            exibirTextotela("p", "O numero secreto é menor");
        }
        else{
            exibirTextotela("p", "O numero secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElemento = listaNumerosSorteados.length;

    if(quantidadeElemento === numeroLimite);

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
