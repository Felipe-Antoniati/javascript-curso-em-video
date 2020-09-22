let num = [5, 8, 2, 9, 3]
num.push(1) // a ordem do push autera a ordem do sort()
num.sort() 
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do Vetor é: ${num[0]}`)
let pos = num.indexOf(4) //mostra o indice do valor dentro do parenteses ()
if(pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)

}