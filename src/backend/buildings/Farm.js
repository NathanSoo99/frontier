import { buildingStats } from "./BuildingReference"
import Building from "./Building"

const Farm = class Farm extends Building {
    static key = "farm"

    constructor(index) {
        super(buildingStats.farm.positions, index)
    }

    applyEffect = (game) => {
        let gains = 0
        this.workers.forEach((worker) => {
            if (worker !== null) {
                gains += 100 * this.level
            }
        })
        game.setResource("food", game.getResource("food") + gains)
    }

    getName = () => {
        return Farm.key.at(0).toUpperCase() + Farm.key.slice(1)
    }

    getKey = () => {
        return Farm.key
    }

    levelUp = (game) => {
        this.level += 1
    }
}

export default Farm