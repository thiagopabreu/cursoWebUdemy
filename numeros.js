const peso1 = 1.5
const peso2 = Number('2.0')

console.log(typeof peso1)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.54
const avaliacao2 = 5.8

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(total.toString(2))

