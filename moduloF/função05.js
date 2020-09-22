//RECURSIVIDADE
function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * (fatorial(n-1))
    }

}

console.log(fatorial(5))

/*
5! = 5 x 4!
o fatorial de um num pode ser calculado baseado no fatorial 
de outro num, a não ser que seja fatorial de 1

Exemplo:
n! = n x (n-1)
1! = 1

*/