// Exercício 7: Manipulação de imagens
// Crie uma imagem onde, ao clicar, ela se expande para ocupar toda a tela e,
// ao clicar novamente, ela retorna ao tamanho original. Utilize eventos para
// alternar entre os estados da imagem.

const imagem = document.querySelector('#imagem');
let isExpanded = false;

imagem.addEventListener('click', () => {
  if (isExpanded) {
    imagem.classList.remove('expandida');
  } else {
    imagem.classList.add('expandida');
  }
  isExpanded = !isExpanded;
});