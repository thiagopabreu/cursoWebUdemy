console.log('01)', '1' == 1) // '1' tem o mesmo valor que 1: True
console.log('02)', '1' === 1) // '1' tem o mesmo valor e o mesmo tipo: False
console.log('03)', '3' != 3) // '3' não tem o mesmo valor que 3: False
console.log('04)', '3' !== 3) // '3' não tem o mesmo valor e nem o mesmo tipo: True

console.log('05)', 3 < 2) 
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2) 
console.log('11)', undefined == null)
console.log('12)', d1.getTime() == d2.getTime())
console.log('13)', undefined === null  )