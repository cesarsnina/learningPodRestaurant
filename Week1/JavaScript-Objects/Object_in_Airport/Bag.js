
class Bag{
    constructor(weight){

        if(!weight){
            throw new Error('please add a weight')
        }
        this.weight = weight
    }
}

let newBag = new Bag(23)

module.exports = Bag