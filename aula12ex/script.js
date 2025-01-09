function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora <= 12){
        //Dia
        img.src = 'dia.png'
        document.body.style.background = '#736F3D'
    } else if(hora > 12 && hora <= 18){
        //Tarde
        img.src = 'tarde.png'
        document.body.style.background = '#F28705'
    }else{
        //Noite
        img.src = 'noite.png'
        document.body.style.background = '#0B508C'
    }

}
