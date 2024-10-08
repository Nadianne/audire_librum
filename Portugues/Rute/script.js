const botaoPlayPause = document.getElementById('botaoPlayPause');
const audioCapitulo = document.getElementById('audioCapitulo');
const botaoNext = document.getElementById('botaoNext');
const botaoBack = document.getElementById('botaoBack');
const nomeCapitulo = document.getElementById('capitulo');

const num_cap = 4;
let player = 0;
let capAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play');
    botaoPlayPause.classList.add('bi-pause');
}

function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play')
    botaoPlayPause.classList.remove('bi-pause')
}

function playOrPause(){
    if(player === 0){
        tocarFaixa();
        player = 1;
    } else {
        pausarFaixa();
        player = 0;
    }
}

function trocarNome(){
    nomeCapitulo.innerText = 'Capítulo ' + capAtual;
}

function proxFaixa(){
    if (capAtual === num_cap){
        capAtual =1;
    } else{
        capAtual = capAtual + 1
    }

    
    audioCapitulo.src = "livro_de_ruth_1811_librivox/" + capAtual + '.mp3';
    tocarFaixa();
    player = 1;
    trocarNome();
}


function voltarFaixa(){
    if (capAtual === 1){
        capAtual =1;
    } else{
        capAtual = capAtual - 1;
    }

    
    audioCapitulo.src = "livro_de_ruth_1811_librivox/" + capAtual + '.mp3';
    tocarFaixa();
    player = 1;
    trocarNome();
}

botaoBack.addEventListener('click', voltarFaixa)
botaoNext.addEventListener('click', proxFaixa)
botaoPlayPause.addEventListener('click', playOrPause);
