import { buildingStats } from "./BuildingReference"
import Building from "./Building"

const Quarry = class Quarry extends Building {
    static key = "quarry"
    static skill = "stonecutting"

    static positions = 3
    static cost = {
        wood: 200,
        metal: 100   
    }

    constructor(index) {
        super(buildingStats.quarry.positions, index)
    }

    getName = () => {
        return Quarry.key.at(0).toUpperCase() + Quarry.key.slice(1)
    }

    getKey = () => {
        return Quarry.key
    }

    applyEffect = (game) => {
        let gains = 0
        this.workers.forEach((worker) => {
            if (worker !== null) {
                gains += 100 * this.level * worker.getLevel(Quarry.skill)
                worker.addExperience(Quarry.skill, 60)
            }
        })
        game.setResource("stone", game.getResource("stone") + gains)
    }

    levelUp = (game) => {
        this.level += 1
    }
}

export default Quarry