import Building from "./Building"

const Encampment = class Encampment extends Building {
    applyEffect = (game) => {
        console.log(game.buildings.length)
        console.log("Encampment Effect Activated")
    }
}

export default Encampment