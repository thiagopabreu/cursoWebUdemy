// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec()
{
    const saudacao = 'Falaaa' // contexto lexico 2
    return saudacao
} 

//objetos sao grupos aninhados de pares nome/valor

const cliente = 
{
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Souto Maior',
        numero: 12
        }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)