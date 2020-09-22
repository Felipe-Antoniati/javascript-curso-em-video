var a = window.document.getElementById('area') //faz a ligação do obj
a.addEventListener('click',clicar)
a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout',sair)

function clicar() {
    a.innerText = 'Cliclou!' // muda conteúdo do objeto
    a.style.background = 'red'
}
function entrar() {
    a.innerText = 'Entrou!'
}
function sair() {
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}