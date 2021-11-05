class Plane{
    constructor(name){
        this.name = name
        this.origin = ''
        this.destination = ''
        this.passengers = []
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
}

let delta = new Plane('Delta')
delta.addPassenger('mimi') 


module.exports = Plane