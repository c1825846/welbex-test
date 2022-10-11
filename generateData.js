const fs = require('node:fs')

let data = '['

let date = new Date('2022 June 1, 12:00')
const fruits = ['апельсины', 'яблоки', 'бананы', 'виноград', 'манго', 'лимоны', 'абрикосы', 'груши', 'лаймы', 'персики', 'личи', 'арбузы']
for (let i = 0; i < 1000; i++) {
    let hours = date.getHours() + getRandomInt(10, 30)
    date.setHours(hours)
    const element = {
        date: date,
        name: fruits[getRandomInt(0, fruits.length)],
        amount: getRandomInt(50, 101),
        distance: getRandomInt(200, 2000) / 10
    }
    data += JSON.stringify(element) + ','
}
data[data.length - 1] = ']'

fs.writeFileSync('data.json', data, (err) => {
    if (err) {
        console.error(err)
    }
})

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}
