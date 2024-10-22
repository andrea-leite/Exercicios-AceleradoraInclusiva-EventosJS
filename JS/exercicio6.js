// Exercício 6: Lista Interativa
// 
// Crie uma lista de itens. Ao clicar em um item da lista, ele deve ser removido.

// Seleciona a lista

const minhaLista = document.getElementById('minhaLista');
minhaLista.addEventListener('click', (event) => {

    if (event.target.tagName === 'LI') {
    event.target.remove();
    }
});