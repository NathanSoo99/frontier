import buildingData from './buildings/BuildingCode'

const Game = class Game {
    constructor() {
        this.buildings = []
    }

    addBuilding = (key) => {
        this.buildings.push(new buildingData[key]())
        console.log(this.buildings[0])
    }

    applyBuildingEffects = () => {
        this.buildings.forEach((building) => {
            building.applyEffect(this)
        })
    }

}

export default Game