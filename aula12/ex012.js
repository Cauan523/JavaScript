var id = 81

if (id < 16){
    console.log('Você não pode votar.')
}else if (id == 16){
    console.log('Voto não obrigatório!')
} else if (id > 16 && id < 70){
    console.log('Voto obrigatório.')
}else{
    console.log('Voto não obrigatório')
}