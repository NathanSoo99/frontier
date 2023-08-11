import { buildingStats } from "./BuildingReference"

import Building from "./Building"
import skills from "../Skills"

const Encampment = class Encampment extends Building {
    static key = "encampment"

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
        game.setDefence(game.getDefence() + 100 * this.level)
    }

    levelUp = (game) => {
        this.level += 1
    }
}

export default Encampment