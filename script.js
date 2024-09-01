const botao = document.getElementById('botaoAnimado');

// Adiciona uma animação quando o botão é clicado
botao.addEventListener('click', () => {
    botao.classList.add('clicado');

    // Remove a classe "clicado" após a animação de clique
    setTimeout(() => {
        botao.classList.remove('clicado');
    }, 200); // A duração da animação coincide com o tempo de 0.2s no CSS
});