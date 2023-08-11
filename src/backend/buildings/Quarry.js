import { buildingStats } from "./BuildingReference"
import Building from "./Building"

const Quarry = class Quarry extends Building {
    static key = "quarry"

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
        game.setResource("stone", game.getResource("stone") + gains)
    }

    getName = () => {
        return Quarry.key.at(0).toUpperCase() + Quarry.key.slice(1)
    }

    getKey = () => {
        return Quarry.key
    }

    levelUp = (game) => {
        this.level += 1
    }
}

export default Quarry