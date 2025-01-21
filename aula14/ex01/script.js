function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')
    var res2 = document.getElementById('res2')

    if(Number(ini.value) == '0' || Number(fim.value) == '0' || Number(pas.value) == '0'){
        //window.alert('[Erro] Valores inválidos')
        res.innerHTML = 'Impossível contar...'
    } else{
        res.innerHTML = `Contando: `
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (i < f){
            //Contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            //Contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        }
        res.innerHTML += ` \u{1F3C1}` //Código emoji em javascript
        
    }
}
