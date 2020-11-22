let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo) // number 
console.log(!isAtivo) // it's not one = false
console.log(!!isAtivo) // it's not not one = true

console.log('os verdadeiros:')
console.log(!!3) //true
console.log(!!-1) //true
console.log(!!' ') //true
console.log(!![]) //true
console.log(!!{}) //true
console.log(!!Infinity) //true
console.log(!!(isAtivo = true)) //true
console.log(!!(isAtivo = 33)) //true
console.log(!!(isAtivo = 0)) //false(?)

console.log('os falsos:')
console.log(!!0) //
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar:')
console.log(!('' || null || 0 || 'epa')) //true because has something in string
console.log(!!('' || null || 0 || 'epa')) //false because has something in string
console.log(('' || null || 0 || 'epa'))

let nome = 'Berna'
console.log(nome || 'Desconhecido')