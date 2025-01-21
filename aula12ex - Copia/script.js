function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade > 0 && idade <= 12){
                //criança
                img.setAttribute('src', 'foto-bebe-M.png')
            } else if(idade < 25){
                //jovem
                img.setAttribute('src', 'foto-jovem-M.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-M.png')
            } else{
                //idoso
                img.setAttribute('src', 'foto-idoso-M.png')
            }
        } else if(fsex[1].checked){
            genero = 'Femenino'
            if(idade > 0 && idade <= 12){
                //criança
                img.setAttribute('src', 'foto-bebe-F.png')
            } else if(idade < 25){
                //jovem
                img.setAttribute('src', 'foto-jovem-F (1).jpg')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'foto-adulto-F.png')
            } else{
                //idoso
                img.setAttribute('src', 'foto-idoso-F.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos gênero ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}