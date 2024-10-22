// Exercício 4: Contador de Cliques
// 
// Crie um botão que, a cada clique, incrementa um contador exibido em um parágrafo.
// Use addEventListener para manipular o evento de clique.


const buttonFour = document.getElementById('buttonFour');
const contador = document.getElementById('contador');

let i = 0;

buttonFour.addEventListener('click', () => {
    i++;

   contador.textContent = i;
});
