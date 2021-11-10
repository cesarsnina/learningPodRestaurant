class User {
    constructor(name, age, address){
        this.name = name
        this.age = age
        this.address = address
        this.app = ''
    }

    downloadApp(app){
        this.app = app
        return `${app} App downloaded!!`
    }
}

const serge = new User('Serge', 29, '131 Brook St.Elmont, NY 11003')
const func = serge.downloadApp('Electric Scooter Hire')

console.log('new user: ',serge)
console.log('download app return: ',func)


module.exports = User