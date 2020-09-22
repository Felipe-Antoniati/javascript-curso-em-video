function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src= 'fotomanha.png'
        document.body.style.background = '#c79269'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        document.body.style.background = '#c58a47'
        img.src = 'fototarde.png'
    } else {
        img.src = 'fotonoite.png'
        //BOA NOITE
        document.body.style.background = '#0f2123'
    }
}
