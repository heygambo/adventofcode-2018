const fs = require('fs')
const inputBuffer = fs.readFileSync('input.txt')
const input = inputBuffer.toString()
const ids = input.split('\n')

const part1 = () => {
  const createIdsFilter = count => {
    return ids => {
      return ids.filter(id => {
        const counter = {}
        for (const char of id) {
          if (counter[char] === undefined) {
            counter[char] = 0
          }
          counter[char]++
        }
        return Object.keys(counter)
          .find(k => {
            // console.log(counter[k] === count)
            return counter[k] === count
          })
      })
    }
  }
  const twoFilter = createIdsFilter(2)
  const threeFilter = createIdsFilter(3)
  const twoLength = twoFilter(ids).length
  const threeLength = threeFilter(ids).length
  return twoLength * threeLength
}
console.log('result part1:', part1())
