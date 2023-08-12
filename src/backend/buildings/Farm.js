import { buildingStats } from "./BuildingReference"
import Building from "./Building"

const Farm = class Farm extends Building {
    static key = "farm"
    static skill = "farming"

    static positions = 4
    static cost = {
        wood: 100,
        metal: 100,
        stone: 100
    }

    constructor(index) {
        super(buildingStats.farm.positions, index)
    }

    getName = () => {
        return Farm.key.at(0).toUpperCase() + Farm.key.slice(1)
    }

    getKey = () => {
        return Farm.key
    }
    
    applyEffect = (game) => {
        let gains = 0
        this.workers.forEach((worker) => {
            if ( worker !== null ) {
                gains += 100 * this.level * worker.getLevel(Farm.skill)
                worker.addExperience(Farm.skill, 60)
            }
        })
        game.setResource("food", game.getResource("food") + gains)
    }



    levelUp = (game) => {
        this.level += 1
    }
}

export default Farm