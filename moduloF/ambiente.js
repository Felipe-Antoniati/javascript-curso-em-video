let valores = [8 , 1, 7, 4, 2, 9]

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // Cód tradicional de percurso pra exibição no vetor


for (let pos in valores) { // para cada posição na variavel composta
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //esta syntaxe só funciona pra array e obj