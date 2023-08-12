import { buildingStats } from "./BuildingReference"

import Building from "./Building"

const Encampment = class Encampment extends Building {
    static key = "encampment"
    static skill = "fighting"

    static positions = 1
    static cost = {
        wood: 100,
        metal: 200,
        stone: 100
    }

    constructor(index) {
        super(buildingStats[Encampment.key].positions, index)
    }

    getName = () => {
        return Encampment.key.at(0).toUpperCase() + Encampment.key.slice(1)
    }

    getKey = () => {
        return Encampment.key
    }

    applyEffect = (game) => {
        let fightingAbility = 0
        this.workers.forEach((worker) => { 
            if ( worker !== null ) {
                fightingAbility += worker.getLevel(Encampment.skill)
                worker.addExperience(Encampment.skill, 60)
            }
        })

        game.setDefence(game.getDefence() + 100 * this.level * fightingAbility)
    }

    levelUp = (game) => {
        this.level += 1
    }
}

export default Encampment