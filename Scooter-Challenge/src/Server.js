const {ChargingStation} = require('./ChargingStation')

class Server extends ChargingStation{
    constructor(serverId, name, location){
        super(name, location)

        this.serverId = serverId
        this.activities = []
    }

    checkOut(scooterName){
        let scooterOut = {
            scooterName: scooterName,
            status: 'is Out',
            station: this.name
        }
        this.activities.push(scooterOut)
        console.log(`scooter ${scooterName} is out!!`)
    }
    checkIn(scooter){
        let isIn = false
        for(let i = 0; i < this.activities.length; i++){
            let activity = this.activities[i]
            
            if(activity.scooterName === scooter){
                activity.status = 'is In'
                isIn = true
            }
        }

        if(isIn){
            console.log(`scooter ${scooter} is In!!`)
            console.log(` *** transaction was succesfull ***`)
        }
        

    }
}

const newServer = new Server('linix-24455')
newServer.checkOut('scooter123')
newServer.checkOut('scooter9999')
newServer.checkIn('scooter9999')

console.log('server object:', newServer)

module.exports = Server