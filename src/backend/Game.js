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

        this.nDays = 0
        this.defenceStrength = 0
        this.enemyStrength = 0

    }

    addBuilding = (key) => {
    /*  
        Check if the player has enough resources to construct the building and if so, add the building, deduct the
        resources and return the building object. Otherwise, if the player doesn't possess the necessary resources,
        return null.
    */
        if (Object.keys(buildingStats[key]["cost"]).filter(
            (resource) => (
                buildingStats[key]["cost"][resource] > this.resources[resource]
            )
        ).length === 0) {
            const building = new buildingData[key](this.buildings.length)
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
    /*
        Cycle through each building and activate its effect.
    */
        this.buildings.forEach((building) => {
            building.applyEffect(this)
        })
    }

    buildingLevelUp = (index) => {
    /*
        Check if the player has enough resources to upgrade the building and if so, add the building, deduct the
        resources. Otherwise, if the player doesn't possess the necessary resources, do nothing.
        
        TODO: Add upgrade costs
    */
        let building = this.buildings[index]
        let key = building.getKey()
        if (Object.keys(buildingStats[key]["cost"]).filter(
            (resource) => (
                buildingStats[key]["cost"][resource] > this.resources[resource]
            )
        ).length === 0) {
            this.buildings[index].levelUp()
            Object.keys(buildingStats[key]["cost"]).forEach(
                (resource) => (
                    this.resources[resource] -= buildingStats[key]["cost"][resource]
                )
            )
            return true
        }
        return false
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

    setDefence = (amount) => {
        this.defenceStrength = amount
    }

    getDefence = () => {
        return this.defenceStrength
    }

    getDanger = () => {
        return this.enemyStrength
    }

    getDay = () => {
        return this.nDays
    }

    endDay = () => {
        this.nDays += 1
        this.enemyStrength += 100
        this.defenceStrength = 0
        

        this.applyBuildingEffects()
    }
}

export default Game