function fat(n){
    let cal = 1
    for(let c = n; c > 1; c--){
        cal *= c
    }
    return cal
}
console.log(fat(5))