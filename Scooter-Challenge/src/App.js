class App{
    constructor(name){
        this.name = name
        this.users = []
        this.stations = []
    }

    registerUser(fullName, email, password, accountNumber, routingNumber){
        let info = {
            fullName: fullName,
            email: email,
            password: password,
            accountNumber: accountNumber,
            routingNumber: routingNumber
        }

        this.users.push(info)

        console.log(`user ${info.fullName} has succesfully registered!!`)
    }
    
    removeUser(name){
        let trash = []
        for(let i = 0; i < this.users.length; i++){
            let user = this.users[i]
            if(user.fullName === name){
                trash.push(user)
                this.users.splice(i, 1)
            }
        }
        console.log(`user ${name} has been succesfully removed!!`)
    }

    getUserInfo(name){
        for(let i = 0; i < this.users.length; i++){
            let user = this.users[i]
            if(user.fullName === name){
                return `User: ${user.fullName}, email: ${user.email}, Account Number:${user.accountNumber} `
            }
        }
    }

    addStations(station){
        this.stations.push(station)
    }

    getStations(){
        this.stations.forEach(element => {
            console.log(element)
        });
    }


}

const newApp = new App('Electric Scooter Hire')
newApp.registerUser('serge', 'serge@google.com', 'xxxxxx', 'hbdsiuiu77', 'dsbuvus8888')
newApp.registerUser('titi', 'serge@yahoo.com', 'xxxxxx', 'hbdsiuiu77', 'dsbuvus8888')
newApp.addStations('station1')
newApp.addStations('station2')
newApp.addStations('station3')
//newApp.removeUser('serge')

newApp.getStations()
//console.log('App object', newApp.getUserInfo("serge"))
console.log('App object', newApp)


module.exports = App