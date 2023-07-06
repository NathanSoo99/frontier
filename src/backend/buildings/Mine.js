import Building from "./Building"

const Mine = class Mine extends Building {
    applyEffect = (game) => {
        console.log(game.buildings.length)
        console.log("Mine Effect Activated")
    }
}

export default Mine