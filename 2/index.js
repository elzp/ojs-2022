const gameConstructor = require('./game')
const game = new gameConstructor()

game.move('rock', 'paper')
game.move('scissors', 'scissors')
game.move('paper', 'scissors')
game.move('paper', 'rock')

const storedGame = game.save()
const loadedGame = game.load(storedGame)

loadedgame.move('paper', 'scissors')
