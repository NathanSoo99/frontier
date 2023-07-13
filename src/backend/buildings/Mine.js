import { buildingStats } from "./BuildingReference"
import Building from "./Building"

const Mine = class Mine extends Building {
    constructor() {
        super(buildingStats.mine.positions)
    }

    applyEffect = (game) => {
        console.log("Mine Effect Activated")
    }

    getName = () => {
        return "Mine"
    }
}

export default Mine