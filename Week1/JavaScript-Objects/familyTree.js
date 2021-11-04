class Person {
    constructor(name){
        this.name = name
        this.parents = []

    }

    childOf(){
        if(this.parents.length > 0){
            return this.parents.map((parent) => {
                return parent.name
            }).join(' & ')
        }
        else{
            return 'No parents yet'
        }
    }


    addParents(parentsName){
        this.parents.push(parentsName)
    }
}

let queenElizabethII = new Person('Queen Elizabeth II')
let KingGeorgVI = new Person('king Georg VI')
let queenElizabeth = new Person('Queen Elizabeth')

queenElizabethII.addParents(KingGeorgVI)
queenElizabethII.addParents(queenElizabeth)


//console.log(queenElizabethII.childOf())



module.exports = Person

