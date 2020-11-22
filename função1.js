//Função sem retorno
function imprimirSoma(a, b)
{
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(3) // -> 3 + underfined = NaN(Not a Number)
imprimirSoma(2, 3, 4, 5, 6) // -> pega somente os primeiros

function soma(a, b = 0)
{
    return a + b
}
console.log(soma(2, 3))
console.log(2)