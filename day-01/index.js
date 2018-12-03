const fs = require('fs')
const inputBuffer = fs.readFileSync('input.txt')
const input = inputBuffer.toString()
const numbers = input.split('\n').filter(n => parseInt(n)).map(n => parseInt(n))
const task1 = () => {
  return numbers.reduce((acc, n) => {
    acc += n
    return acc
  }, 0)
}
const task2 = () => {
  const frequencies = []
  let duplicate = null
  let sum = 0
  const run = initialValue => {
    console.log('running init value:', initialValue)
    return numbers.reduce((acc, n) => {
      acc += n
      if (
        duplicate === null &&
        frequencies.indexOf(acc) >= 0
      ) {
        duplicate = acc
      }
      frequencies.push(acc)
      return acc
    }, initialValue)
  }
  while (duplicate === null) {
    sum = run(sum)
  }
  return duplicate
}
console.log('task1', task1())
console.log('task2', task2())
