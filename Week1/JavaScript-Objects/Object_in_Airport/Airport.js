class Airport{

    static airports = []

    static flyplane(){
        // let planeToFly = Airport.airports[0].planes[0]
        // let destination = Airport.airports[1].planes
        // console.log(planeToFly)
        // console.log(destination)
        return Airport.airports.length > 0

    }

    constructor(name){
        this.name = name
        this.planes = []
        this.constructor.airports.push(this)
    }

    addPlanes(plane){
        this.planes.push(plane)
    }


}
let jfk = new Airport('JFK')
jfk.addPlanes('Delta')
jfk.addPlanes('beta')

let bold = new Airport('BOLD')
bold.addPlanes('sigma')
bold.addPlanes('Alpha')


console.log(Airport.flyplane())

module.exports = Airport