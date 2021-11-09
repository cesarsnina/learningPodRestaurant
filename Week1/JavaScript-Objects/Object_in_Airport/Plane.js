class Plane{
    constructor(name){
        this.name = name
        this.origin = ''
        this.destination = ''
        this.passengers = []
        this.crew = ''
    }

    setOrigin(origin){
        this.origin = origin
    }

    setDestination(destination){
        this.destination = destination
    }

    addPassenger(passenger){
        this.passengers.push(passenger)
    }

    addCrew(crew){
        this.crew = crew
    }
}

let delta = new Plane('Delta')
delta.addPassenger('mimi') 


module.exports = Plane