import skills from "./Skills"

const Person = class Person {
    constructor(name) {
        this.skills = {}
        skills.forEach((skill) => (this.skills[skill] = {
            level: 0
        }))

        this.workplace = null
        this.workplacePosition = null
        this.name = name
    }

    getName = () => {
        return this.name
    }

    getWorkplace = () => {
        return this.workplace
    }

    addWorkplace = (building, position) => {
        if (this.workplace !== null) {
            this.workplace.workerResign(this.workplacePosition)
        }
        this.workplace = building
        this.workplacePosition = position
    }
    removeWorkplace = () => {
        this.workplace = null
        this.workplacePosition = null
    }
    quitWorkplace = () => {
        this.workplace.workerResign(this.workplacePosition)
        this.workplace = null
        this.workplacePosition = null
    }
}

export default Person