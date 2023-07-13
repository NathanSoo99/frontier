import skills from "./Skills"

const Person = class Person {
    constructor() {
        this.skills = {}
        skills.forEach((skill) => (this.skills[skill] = {
            level: 0
        }))

        this.workplace = null
        this.workplacePosition = null
        this.name = "John Smith"
    }

    getName = () => {
        return this.name
    }

    addWorkplace = (building, position) => {
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