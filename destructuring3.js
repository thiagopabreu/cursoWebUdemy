function rand({min = 0, max = 1000})
{
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min:10}
console.log(rand({min: 10, max: 150}))
console.log(rand({min: 999, max: 1500}))
console.log(rand(obj))
console.log(rand({}))