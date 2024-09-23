function escolherMao(mao) {    
    const maoJogador = mao;
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const aleatorio = parseInt(Math.random() * 3);
    const maoEscolhida = opcoes[aleatorio];

    const vitorias = document.querySelector('#vitorias');
    const empates = document.querySelector('#empates');
    const derrotas = document.querySelector('#derrotas'); 

    switch (maoJogador, maoEscolhida) {
        case 'pedra':
        document.getElementById('npc').src = 'img/pedra.png';
        break;

        case 'papel':
        document.getElementById('npc').src = 'img/papel.png';
        break;

        case 'tesoura':
        document.getElementById('npc').src = 'img/tesoura.png';
        break;
    }

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

    console.log(`Jogador escolheu: ${maoJogador}`);
    console.log(`Adversário escolheu: ${maoEscolhida}`);
    return maoJogador;
    return scoreTotal;
}

function reset() {
    vitorias.value = 0;
    empates.value = 0;
    derrotas.value = 0;
}


console.log(escolherMao());


