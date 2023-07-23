const Building = class Building {
    constructor(positions) {
        this.positions = positions
        this.level = 1
        this.workers = Array(this.positions).fill(null)
        this.apprentice = null
    }

    applyEffect = (game) => {}

    canLevelUp = (game) => {}
    levelUp = () => {}

    getNPositions = () => { return this.positions }
    getName = () => {}

    // Methods related to workers
    hireWorker = (person, position) => {
        // TODO check person's skills
        if (this.workers[position] !== null) {
            this.workers[position].removeWorkplace()
        }
        person.addWorkplace(this, position)
        this.workers[position] = person
    }
    fireWorker = (position) => {
        this.workers[position].removeWorkplace()
        this.workers[position] = null
    }
    getWorkers = () => {
        return this.workers
    }

    // Methods related to apprentices
    hireApprentice = (person) => { 
        if (this.apprentice !== null) {
            this.apprentice.removeWorkplace()
        }
        this.apprentice.addWorkplace(this, -1)
        this.apprentice = person
    }
    fireApprentice = () => {
        this.apprentice.removeWorkplace()
        this.apprentice = null
    }

    getApprentice = () => {
        return this.apprentice
    }

    // Methods relevant to workers and apprentices
    workerResign = (position) => {
        if (position === -1) {
            this.apprentice = null
        } else {
            this.workers[position] = null
        }
    }
}

export default Building