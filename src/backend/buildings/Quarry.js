import Building from "./Building"

const Quarry = class Quarry extends Building {
    applyEffect = (game) => {
        console.log(game.buildings.length)
        console.log("Quarry Effect Activated")
    }
}

export default Quarry