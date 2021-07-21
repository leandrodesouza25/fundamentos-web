let nome = window.document.getElementById('nome')

/* Javascript é case sensitive, ou seja, maiúsculas e minúsculas fazem diferença

por Tag: getElementByTagName()

por Id: getElementById()

por Nome: getElementsByName

por Classe: getElementsByClassName()

por Seletor: querySelector () , sendo esse o mais usado


*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')


function validaNome() {
    let.txtNome = document.querySelector('#txtNome')
    if (nome.value.lenght < 3 ){
      
    txtNome.innerHTML = 'Nome inválido'
    txtNome.style.color = 'red'
  } else{
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
  }

    function validaEmail() {

        let txtEmail = document.querySelector('#email')
      
        if (email.value.indexOf('@') == -1 || email.value.indexOf('.')) {

            txtEmail.innerHTML = 'E-mail inválido'
             txtEmail.style.color = 'red'
        } else {
            txtEmail.innerHTML = 'E-mail válido'
            txtEmail.style.color = 'green'

        }
    }


}