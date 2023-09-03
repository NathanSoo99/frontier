import Extermination from "./Extermination"

const Place = class Place {
    constructor(name) {
        this.name = name
        this.nEnemies = 0
        this.extermination = new Extermination(this)
    }

    getNEnemies = () => {
        return this.nEnemies
    }

    setNEnemies = (n) => {
        this.nEnemies = n
    }

    getName = () => {
        return this.name
    }

    getEnemyStrength  = () => {
        return this.nEnemies * 10
    }

    getExtermination = () => {
        return this.extermination
    }

    setExtermination = (extermination) => {
        this.extermination = extermination
    }

    resolveExtermination = () => {
        this.extermination.resolve()
    }

}

export default Place