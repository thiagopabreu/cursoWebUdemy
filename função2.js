const imprimirSoma = function (a, b) //Armazenando uma funcao em uma variavel
{
    console.log(a + b)
}

imprimirSoma(2, 5)

const soma = (a, b) => { //armazenamento uma funcao arrow em uma variavel
    return a + b
}

console.log(soma(2, 2)) 

const subtracao = (a, b) => a - b //retorno implicito
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2("Legal")


