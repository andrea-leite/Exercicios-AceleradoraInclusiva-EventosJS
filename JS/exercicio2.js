// Exercício 2: Troca de Texto
// Crie um parágrafo com um texto inicial. Ao clicar em um botão, altere o texto do
// parágrafo para "Texto alterado!" usando addEventListener.

  const paragrafo = document.getElementById('paragrafoTroca');
  const button = document.getElementById('buttonTwo');
        
  button.addEventListener('click', function() {        
  paragrafo.textContent = 'Texto alterado!';
  });