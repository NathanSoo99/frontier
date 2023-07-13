import { buildingStats } from "./BuildingReference"
import Building from "./Building"

const Farm = class Farm extends Building {
    constructor() {
        super(buildingStats.farm.positions)
    }

    applyEffect = (game) => {
        console.log("Farm Effect Activated")
    }

    getName = () => {
        return "Farm"
    }
}

export default Farm