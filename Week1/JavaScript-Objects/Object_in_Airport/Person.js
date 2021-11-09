class Person{
    constructor(name, bags){
        this.name = name
        this.bags = []
    }

    addBag(bag){
        this.bags.push(bag)
    }
}

//CrewMember extended class 
class CrewMember extends Person{
    constructor(name, bags, position, staffNumber){
        super(name, bags )

        this.position = position
        this.staffNumber = staffNumber
         
    }
}

//Passenger extended class
class Passenger extends Person{
    constructor(name, bags, passportNumber, seatNumber){
        super(name, bags)
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
    }
}


let newPassenger = new Person("titi")
newPassenger.addBag(2)




module.exports = {
    Person,
    CrewMember,
    Passenger

}