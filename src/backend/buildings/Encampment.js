import { buildingStats } from "./BuildingReference"

import Building from "./Building"

const Encampment = class Encampment extends Building {
    constructor() {
        super(buildingStats.encampment.positions)
    }

    applyEffect = (game) => {
        console.log("Encampment Effect Activated")
    }

    getName = () => {
        return "Encampment"
    }
}

export default Encampment