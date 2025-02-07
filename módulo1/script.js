// Adiciona uma função de clique para todos os botões com a classe .btn
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Você clicou em ${button.textContent}`);
    });
});

// Cria um objeto de áudio para tocar a música de fundo
const musica = new Audio('assets/musicainicio.mp3');
musica.loop = true; // Faz a música tocar em loop

// Verifica se o navegador bloqueou o autoplay
document.addEventListener('click', () => {
    if (musica.paused) {
        musica.play().catch(error => console.error('Erro ao tentar tocar a música:', error));
    }
}, { once: true }); // Garante que o evento só acontece uma vez


let btnJogar = this.add.text(window.innerWidth / 2, window.innerHeight / 2 - 50, 'JOGAR', {
    fontFamily: 'PixelFont',
    fontSize: '32px',
    color: '#FFFFFF',
    backgroundColor: '#000000',
    padding: { x: 10, y: 5 }
}).setOrigin(0.5)
  .setInteractive();

btnJogar.on('pointerdown', () => {
    alert('Você clicou em JOGAR');
});

// Adiciona o texto do botão "Configurações"
let btnConfig = this.add.text(window.innerWidth / 2, window.innerHeight / 2 + 50, 'CONFIGURAÇÕES', {
    fontFamily: 'PixelFont',
    fontSize: '32px',
    color: '#FFFFFF',
    backgroundColor: '#000000',
    padding: { x: 10, y: 5 }
}).setOrigin(0.5)
  .setInteractive();

btnConfig.on('pointerdown', () => {
    alert('Você clicou em CONFIGURAÇÕES');
});

