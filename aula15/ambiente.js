let num = [2, 7, 5]
num.push(9)
num.sort
console.log(num)
console.log(`A variável tem ${num.length} números`)
console.log(`O primeiro índice é o número ${num[0]}`)

let pos = num.indexOf(2)
if(pos == -1){
    console.log('Esse número não está dentro da variável')
}else{
    console.log(`O número está na posição ${pos}`)
}
