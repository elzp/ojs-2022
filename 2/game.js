class RockPaperScissors {

    constructor() {
        this.p1Wins = 0
        this.p2Wins = 0
    }

    move(decisionP1, decisionP2) {
        if (decisionP1 === decisionP2) {
            console.log(`DRAW - ${decisionP1} & ${decisionP2}!\n`)
            return;
        }

        const p1Won = this.checkWinningPair(decisionP1, decisionP2)
        if (p1Won) {
            console.log(`P1 wins - ${decisionP1} beats ${decisionP2}!`)
            this.p1Wins++;
        } else {
            console.log(`P2 wins - ${decisionP2} beats ${decisionP1}!`)
            this.p2Wins++;
        }

        console.log(`Current score - P1: ${this.p1Wins} P2: ${this.p2Wins}\n`)
    } 
    save(){
        return JSON.stringify({
            p1Wins: this.p1Wins,
            p2Wins: this.p2Wins
        });
    }
    load(status){
      try {
          const { p1Wins, p2Wins } = JSON.parse(status);
          if( typeof p1Wins === 'number' && typeof p2Wins ==='number' ){
            this.p1Wins = p1Wins
            this.p2Wins = p2Wins 
            return this;
          }else{
              throw("p1Wins and p2Wins mmust be number values.")
            }
      }catch(err){
        throw(err.message)
      }
    }
    checkWinningPair(d1, d2) {
        const winningMoves = {
            rock: 'scissors',
            scissors: 'paper',
            paper: 'rock'
        }
        return winningMoves[d1] === d2
    }

}

module.exports = RockPaperScissors