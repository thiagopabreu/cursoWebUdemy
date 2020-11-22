// recurso adicionado no ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 5
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)
pessoa.bemHumorada = 'a'
console.log(sobrenome, pessoa.bemHumorada)

const { endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

const {conta: {ag, num } } = pessoa
console.log(ag, num)