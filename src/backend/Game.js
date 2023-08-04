import { buildingData, buildingStats } from './buildings/BuildingReference'
import Person from './Person'

const Game = class Game {
    constructor() {
        this.buildings = []
        this.people = []
        this.resources = {
            food: 1000,
            stone: 1000,
            metal: 1000,
            wood: 1000
        }
    }

    addBuilding = (key) => {
        if (Object.keys(buildingStats[key]["cost"]).filter(
            (resource) => (
                buildingStats[key]["cost"][resource] > this.resources[resource]
            )
        ).length === 0) {
            const building = new buildingData[key]()
            this.buildings.push(building)
            Object.keys(buildingStats[key]["cost"]).forEach(
                (resource) => (
                    this.resources[resource] -= buildingStats[key]["cost"][resource]
                )
            )
            return building
        }
        return null
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

    setResource = (key, amount) => {
        this.resources[key] = amount
        return this.resources[key]
    }

    getResource = (key) => {
        return this.resources[key]
    }
}

export default Game