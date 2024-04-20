class Player {

    constructor(gameSize, gameScreen, leftValue, topValue) {

        this.gameSize = gameSize
        this.gameScreen = gameScreen

        this.playerSize = {
            w: 65,
            h: 65,
        }

        this.playerPos = {
            left: leftValue,
            top: topValue
        }

        this.init()

    }


    init() {
        this.playerOne = document.createElement('div');
        this.playerOne.style.position = "absolute"
        this.playerOne.style.backgroundColor = 'pink'

        this.playerOne.style.width = `${this.playerSize.w}px`
        this.playerOne.style.height = `${this.playerSize.h}px`
        this.playerOne.style.left = `${this.playerPos.left}px`
        this.playerOne.style.top = `${this.playerPos.top}px`
    }

    move() {

    }
}