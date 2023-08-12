import skills from "./Skills"

const Person = class Person {
    constructor(name) {
        this.skills = {}
        skills.forEach((skill) => (this.skills[skill] = {
            level: 1,
            experience: 0,
            levelUp: 100
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
    /*
        Add a workplace to a person but if the person is already employed, then resign from that workplace first.
    */
        if (this.workplace !== null) {
            this.workplace.workerResign(this.workplacePosition)
        }
        this.workplace = building
        this.workplacePosition = position
    }
    removeWorkplace = () => {
    /*
        Remove worker from workplace (initiated by workplace)
    */
        this.workplace = null
        this.workplacePosition = null
    }
    quitWorkplace = () => {
    /*
        Remove worker from workplace (initated by person)
    */
        this.workplace.workerResign(this.workplacePosition)
        this.workplace = null
        this.workplacePosition = null
    }

    getLevel = (skill) => {
        return this.skills[skill].level
    }
    addExperience = ( skill, experience ) => {
    /*
        If person's experience in a certain skill is lower than the level up value after experience is added then just
        add the experience. Otherwise add a level and add the difference between added experience and the level up
        experience.
    */
        if ( this.skills[skill].experience + experience < this.skills[skill].levelUp ) {
            this.skills[skill].experience += experience
        } else {
            this.skills[skill].level += 1
            this.skills[skill].experience += experience - this.skills[skill].levelUp
        }
        console.log(this.skills[skill])
        
    }
}

export default Person