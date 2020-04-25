const { moves } = require('./constants')

const movesArr = Object.keys(moves)

module.exports = (amount) => {
  const randomMoves = []
  for(let i = 0; i < amount; i++) {
    randomMoves.push(movesArr[Math.floor(Math.random() * movesArr.length)])
  }
  return randomMoves
}
