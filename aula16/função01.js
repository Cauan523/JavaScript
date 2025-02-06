function parimpar(n /*parâmetro*/){
    if(n % 2 == 0){ //ação
        return 'Par!' // retorno; Só um retorno será executado
    } else{
        return 'Ímpar'
    }
}
console.log(parimpar(3)); // chamada
/*Também posso criar uma varável para a chamada
ex: let res = parimpar(2)*/