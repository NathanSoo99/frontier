import { buildingStats } from "./BuildingReference"
import Building from "./Building"

const Mine = class Mine extends Building {
    static key = "mine"

    constructor(index) {
        super(buildingStats.mine.positions, index)
    }

    applyEffect = (game) => {
        let gains = 0
        this.workers.forEach((worker) => {
            if (worker !== null) {
                gains += 100 * this.level
            }
        })
        game.setResource("metal", game.getResource("metal") + gains)
    }

    getName = () => {
        return Mine.key.at(0).toUpperCase() + Mine.key.slice(1)
    }

    getKey = () => {
        return Mine.key
    }

    levelUp = (game) => {
        this.level += 1
    }
}

export default Mine