class Passenger{
    constructor(name, passportNumber, seatNumber){
        this.name = name
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
        this.bags = []
    }

    addBag(bag){
        this.bags.push(bag)
    }
}

let newPassenger = new Passenger("titi")
newPassenger.addBag(2)


module.exports = Passenger