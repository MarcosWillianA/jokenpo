const jogoParado = document.getElementById('jogoParado');
const jogoAcontecendo = document.getElementById('jogoAcontecendo');
const jogoResultado = document.getElementById('jogoResultado');

function iniciarJogo () {
    document.getElementById('startJogo').style.display = 'none';
    document.getElementById('telaDeJogo').style.display = 'block'
    document.getElementById('jogoParado').style.display = 'flex'
}

function escolherMao(mao) {
    jogoParado.style.display = 'none';
    jogoAcontecendo.style.display = 'flex';
    jogoResultado.style.display = 'none';
    setTimeout(resultado, 2000);
    
    function resultado() {
        jogoAcontecendo.style.display = 'none';
        jogoResultado.style.display = 'flex';
        switch (true) {
            case maoJogador === maoEscolhida:            
            empates.value ++;
            break;
    
            case maoJogador === 'pedra' && maoEscolhida === 'tesoura' || maoJogador === 'papel' && maoEscolhida === 'pedra' || maoJogador === 'tesoura' && maoEscolhida === 'papel': 
            vitorias.value ++;
            break; 
    
            case maoJogador === 'pedra' && maoEscolhida === 'papel' || maoJogador === 'papel' && maoEscolhida === 'tesoura' || maoJogador === 'tesoura' && maoEscolhida === 'pedra':
            derrotas.value ++;
            break;
        } 
    }

    const maoJogador = mao;
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const aleatorio = parseInt(Math.random() * 3);
    const maoEscolhida = opcoes[aleatorio];

    const vitorias = document.querySelector('#vitorias');
    const empates = document.querySelector('#empates');
    const derrotas = document.querySelector('#derrotas'); 

    switch (maoJogador) {
        case 'pedra':
        document.getElementById('playerResultado').src = 'img/pedra.png';
        break;

        case 'papel':
        document.getElementById('playerResultado').src = 'img/papel.png';
        break;

        case 'tesoura':
        document.getElementById('playerResultado').src = 'img/tesoura.png';
        break;
    }

    switch (maoEscolhida) {
        case 'pedra':
        document.getElementById('npcResultado').src = 'img/pedra.png';
        break;

        case 'papel':
        document.getElementById('npcResultado').src = 'img/papel.png';
        break;

        case 'tesoura':
        document.getElementById('npcResultado').src = 'img/tesoura.png';
        break;
    }

    /*
    switch (true) {
        case maoJogador === maoEscolhida:
        document.getElementById('vitorias').style.animation = 'piscar 2s ease-in-out';
        empates.value ++;
        break;

        case maoJogador === 'pedra' && maoEscolhida === 'tesoura' || maoJogador === 'papel' && maoEscolhida === 'pedra' || maoJogador === 'tesoura' && maoEscolhida === 'papel': 
        document.getElementById('empates').style.animation = 'piscar 2s ease-in-out';
        vitorias.value ++;
        break; 

        case maoJogador === 'pedra' && maoEscolhida === 'papel' || maoJogador === 'papel' && maoEscolhida === 'tesoura' || maoJogador === 'tesoura' && maoEscolhida === 'pedra':
        document.getElementById('derrotas').style.animation = 'piscar 2s ease-in-out';
        derrotas.value ++;
        break;
    } 
    */

}

function reset() {
    jogoParado.style.display = 'flex';
    jogoAcontecendo.style.display = 'none'
    jogoResultado.style.display = 'none'

    vitorias.value = 0;
    empates.value = 0;
    derrotas.value = 0;
}

