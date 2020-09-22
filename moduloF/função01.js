function parimpar(n){
    if(n % 2 == 0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let res = parimpar(123) // variavel para atribuir resultado do return.
console.log(res) // linha de cód. para exibir resultado do return.
console.log(parimpar(4)) // Mesma função das linhas de cód acima.