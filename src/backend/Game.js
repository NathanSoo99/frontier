import { buildingData } from './buildings/BuildingReference'
import Person from './Person'

const Game = class Game {
    constructor() {
        this.buildings = []
        this.people = []
    }

    addBuilding = (key) => {
        const building = new buildingData[key]()
        this.buildings.push(building)
        return building
    }

    getBuildings = () => {
        return this.buildings
    }

    applyBuildingEffects = () => {
        this.buildings.forEach((building) => {
            building.applyEffect(this)
        })
    }

    getPeople = () => {
        return this.people
    }

    addPerson = () => {
        const person = new Person(this.people.length)
        this.people.push(person)
        return person
    }

}

export default Game