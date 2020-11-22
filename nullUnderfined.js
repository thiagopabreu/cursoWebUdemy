let valor // nao inicializada
console.log(valor)

valor = null
console.log(valor)
// console.log(valor.toString()) Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)
console.log(!!produto.preco)

produto.preco = undefined
console.log(!!produto.preco)

// delete produto.preco
