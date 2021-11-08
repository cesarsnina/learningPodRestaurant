class CrewMember{
    constructor(name, position, staffNumber){
        this.name = name
        this.position = position
        this.staffNumber = staffNumber
    }
}

let newMember = new CrewMember('serge', 'supervisor', 55)

module.exports = CrewMember