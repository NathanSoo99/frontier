import Encampment from "./Encampment"
import Mine from "./Mine"
import Quarry from "./Quarry"
import Farm from "./Farm"

import skills from "../Skills"

export const buildingData = {
    encampment: Encampment,
    mine: Mine,
    quarry: Quarry,
    farm: Farm
}

export const buildingStats = {
    encampment: {
        positions: 1,
        cost: {
            wood: 100,
            metal: 200,
            stone: 100
        },
        skill: skills[1]
    },
    mine: {
        positions: 2,
        cost: {
            wood: 300
        },
        skill: skills[2]
    },
    quarry: {
        positions: 3,
        cost: {
            wood: 200,
            metal: 100            
        },
        skill: skills[2]
    },
    farm: {
        positions: 4,
        cost: {
            wood: 100,
            metal: 100,
            stone: 100
        },
        skill: skills[1]
    }
}