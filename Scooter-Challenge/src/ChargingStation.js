class ChargingStation{
    constructor(name, location){
        this.name = name
        this.location = location
        this.scooters = [] 
    }

    addScooter(name){
        this.scooters.push(name)
        console.log(`scooter ${name} is added!!`)
    }
    removeScooter(name){
       let filter = this.scooters.filter((scooter) => scooter !== name)
       this.scooters = filter
        console.log(`scooter ${name} is removed!!`)
    }
}

class Station_1 extends ChargingStation{
    constructor(name, location){
        super(name, location)
    }

}

const newStation = new Station_1('station1', 'Bronx, NY 17735')
newStation.addScooter('scooter1998')
newStation.addScooter('scooter2021')
newStation.removeScooter('scooter2021')
console.log('station object :', newStation)


module.exports = {
    ChargingStation,
    Station_1
}
