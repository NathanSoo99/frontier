import Encampment from "./Encampment"
import Mine from "./Mine"
import Quarry from "./Quarry"
import Farm from "./Farm"

export const buildingData = {
    encampment: Encampment,
    mine: Mine,
    quarry: Quarry,
    farm: Farm
}

export const buildingStats = {
    encampment: {
        positions: 1
    },
    mine: {
        positions: 2
    },
    quarry: {
        positions: 3
    },
    farm: {
        positions: 4
    }
}