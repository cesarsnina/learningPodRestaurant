class Airport{
    constructor(name){
        this.name = name
        this.planes = []
    }

    addPlanes(plane){
        this.planes.push(plane)
    }

    // addPassengers(passenger){
    //     this.planes.
    // }
}
let jfk = new Airport('JFK')
jfk.addPlanes('Delta')
module.exports = Airport