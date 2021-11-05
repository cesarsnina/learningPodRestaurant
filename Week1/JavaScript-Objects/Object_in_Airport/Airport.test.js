const Airport = require('./Airport')
const Passenger = require('./Passenger')
const Plane = require('./Plane')

describe('Airport class', () => {

    //variables for 
    const Airport1 = new Airport('JFK')
    const plane5 = new Plane('Beta')
    const plane6 = new Plane('sigmal')
    const ali = new Passenger('Ali')

    
    
    test('Airport has a name', () => {
        expect(Airport1.name).toBe('JFK')
    })

    test('Airport has planes', () => {

        Airport1.addPlanes(plane5)
        Airport1.addPlanes(plane6)
        expect(Airport1.planes.length).toBe(2)
    })

    test('Airport can add planes', () => {

        Airport1.addPlanes('Delta')
        expect(Airport1.planes.length).toBe(3)
    })

    test('Airport can have planes with Passengers with bags', () => {

        Airport1.planes.addPassenger(ali)
        expect(Airport1.planes.length).toBe(3)
        expect(Airport1.planes.passenger.length).toBe(1)
        expect(Airport1.planes.passenger.length).toBe(1)

    })
})