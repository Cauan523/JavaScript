function gerar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('txtb')

    if(Number(num.value.length) == ''){
        window.alert('Impossível calcular! Insira um número')
    }else{
        tab.innerHTML = ''
        let n = Number(num.value)
        for(let c = 1; c <= 10; c++){
            let i = document.createElement('option')// Criação de um elemento
            i.text = `${n} x ${c} = ${n*c}`
            i.value = `tab${c}`//Para outras linguagens
            tab.appendChild(i)// Adição de um elemento
        }
    }
}