const valores = [7.7, 8, 6.5, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // quantos elementos há no array

valores.push(8)
console.log(valores.pop())
delete valores[2]
console.log(valores)

console.log(typeof valores)