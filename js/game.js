const Game = {

    gameScreen: document.querySelector('#game-screen'),
    gameSize: {
        w: window.innerWidth,
        h: window.innerHeight,
    },

    //background: undefined,
    //speedPlayerCounter: 0,
    player: undefined,
    //gamePath: undefined,
    stepSquare: undefined,

    init() {
        this.setGameScreenSize();
        this.createElement();
        console.log('La clase Game funciona!')
    },

    setGameScreenSize() {
        this.gameScreen.style.width = `${this.gameSize.w}px`   //css properties to take into account
        this.gameScreen.style.height = `${this.gameSize.h}px`
    },

    createElement() {
        const stepSquare1 = new StepSquare(this.gameSize, 350, 250)

        const stepSquarePosLeft = stepSquare1.stepSquarePos.left
        const stepSquareHeight = stepSquare1.stepSquareSize.h
        const stepSquareWidth = stepSquare1.stepSquareSize.w

        const stepSquare2 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare1.stepSquarePos.top - stepSquareHeight - 1, 'zombie')
        const stepSquare3 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare2.stepSquarePos.top - stepSquareHeight - 1)
        const stepSquare4 = new StepSquare(this.gameSize, stepSquarePosLeft, stepSquare3.stepSquarePos.top - stepSquareHeight - 1)
        const stepSquare5 = new StepSquare(this.gameSize, stepSquarePosLeft + stepSquareWidth + 1, stepSquare4.stepSquarePos.top)

        const player = new Player(this.gameSize, this.gameScreen, 200, 200)



        // this.background = new Background(this.gameScreen, this.gameSize)
        //this.gamePath = []
    }
}