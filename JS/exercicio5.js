// Exercício 5: Validação de Formulário
// 
// Crie um formulário com um campo de texto e um botão. Ao clicar no botão, verifique
// se o campo de texto está vazio e exiba um alerta caso esteja. Use o evento submit
// para fazer isso.


const formularioTexto = document.getElementById("campoTexto")
const formularioEnviar = document.getElementById("buttonEnviar")

formularioEnviar.addEventListener("click", function(){
  if(formularioTexto.value === ""){
    alert('Campo Vazio')
    }
})


