import Encampment from "./buildings/Encampment"

const Extermination = class Extermination {
    constructor(place) {
        this.fighters = []
        this.place = place
    }

    updateFighterPositions = () => {
        this.fighters.forEach((fighter, position) => {fighter.setWorkplacePosition(position)})
    }

    addFighter = (person) => {
        person.addWorkplace(this, this.fighters.length)
        this.fighters.push(person)
    }

    removeFighter = (position) => {
        this.fighters[position].removeWorkplace()
        this.fighters.splice(position, 1)
        this.updateFighterPositions()
    }

    getFighters = () => {
        return this.fighters
    }

    fighterResign = (position) => {
        this.fighters.splice(position, 1)
    }

    getPlace = () => {
        return this.place
    }

    resolve = () => {
        let enemyStrength = this.place.getEnemyStrength()
        let fightingAbility = 0
        this.fighters.forEach((fighter) => {
            fightingAbility += fighter.getLevel(Encampment.skill)
        })

        return fightingAbility >= enemyStrength
    }
}

export default Extermination