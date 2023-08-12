import { buildingStats } from "./BuildingReference"
import Building from "./Building"

const Mine = class Mine extends Building {
    static key = "mine"
    static skill = "mining"

    static positions = 2
    static cost = {
        wood: 300
    }

    constructor(index) {
        super(buildingStats.mine.positions, index)
    }

    getName = () => {
        return Mine.key.at(0).toUpperCase() + Mine.key.slice(1)
    }

    getKey = () => {
        return Mine.key
    }

    applyEffect = (game) => {
        let gains = 0
        this.workers.forEach((worker) => {
            if (worker !== null) {
                gains += 100 * this.level * worker.getLevel(Mine.skill)
                worker.addExperience(Mine.skill, 60)
            }
        })
        game.setResource("metal", game.getResource("metal") + gains)
    }

    levelUp = (game) => {
        this.level += 1
    }
}

export default Mine