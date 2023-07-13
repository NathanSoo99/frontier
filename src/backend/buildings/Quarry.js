import { buildingStats } from "./BuildingReference"
import Building from "./Building"

const Quarry = class Quarry extends Building {
    constructor() {
        super(buildingStats.mine.positions)
    }

    applyEffect = (game) => {
        console.log("Quarry Effect Activated")
    }

    getName = () => {
        return "Quarry"
    }
}

export default Quarry