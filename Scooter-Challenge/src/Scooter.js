class Scooter{
    constructor(name, refNumber, batLevel, healthStatus = 'Good'){
        this.name = name
        this.refNumber = refNumber
        this.batLevel = batLevel
        this.healthStatus = healthStatus 
    }

    getInfo(){
        const scooterInfo = {
            name : this.name,
            refNumber: this.refNumber,
            batLevel: this.batLevel,
            healthStatus: this.healthStatus
        }
        return scooterInfo
    }
}

class Scooter_1 extends Scooter{
    constructor(name, refNumber, batLevel, healthStatus ){
        super(name, refNumber, batLevel, healthStatus )
    }

    isBroken(status){
        if(status === 'Broken'){
            this.healthStatus = 'Broken'
        }
    }
}

const newScooter = new Scooter_1('fx3556gh', '44456ff', 76)
newScooter.isBroken('Broken')
console.log('scooter info', newScooter.getInfo())


module.exports = {
    Scooter,
    Scooter_1
}
