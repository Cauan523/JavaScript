let valores = [5, 2, 3, 1, 4]
valores.sort
/*for(let pos = 0; pos < valores.length; pos++){
    console.log(`O número na posição ${pos} é ${valores[pos]}`)
}*/
for(let pos in valores){
    console.log(`O número na posição ${pos} é ${valores[pos]}`)
}