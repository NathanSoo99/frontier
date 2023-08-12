import Encampment from "./Encampment"
import Mine from "./Mine"
import Quarry from "./Quarry"
import Farm from "./Farm"

const buildingTypes = [Encampment, Mine, Quarry, Farm]

export const buildingData = {}

buildingTypes.forEach((buildingType) => { buildingData[buildingType.key] = buildingType })

export const buildingStats = {}

buildingTypes.forEach((buildingType) => {
    buildingStats[buildingType.key] = {
        positions: buildingType.positions,
        cost: buildingType.cost,
        skill: buildingType.skill
    }
})