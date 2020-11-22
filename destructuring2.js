const [a] = [10]
console.log(a)

const [n1, n2, n3, n10, n11 = 0] = [10, 7, 9, 9, 5]
console.log(n1, n2, n3, n10, n11)

const [, [, nota, nota2]] = [[, 8, 8], [9, 6, 8]]
console.log(nota, nota2)