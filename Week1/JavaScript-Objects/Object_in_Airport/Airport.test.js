const Airport = require('./Airport')
const Passenger = require('./Passenger')
const Plane = require('./Plane')
const Bag = require('./Bag')

describe('Airport class', () => {

    //variables for 
    const airport1 = new Airport('JFK')
    const plane5 = new Plane('Beta')
    const ali = new Passenger('Ali')
    const myBag = new Bag(30)

    
    
    test('Airport has a name', () => {
        expect(airport1.name).toBe('JFK')
    })

    test('Airport has planes', () => {

        expect(Array.isArray(airport1.planes)).toBe(true)
    })

    test('Airport can add planes', () => {

        airport1.addPlanes('Delta')
        expect(airport1.planes.length).toBe(1)
    })

    test('Airport can have planes with Passengers with bags', () => {

        airport1.addPlanes(plane5)
        ali.addBag(myBag)
        plane5.addPassenger(ali)
        
        expect(airport1.planes[0].passengers[0].bags[0].weight).toBe(30)

    })

    test('fly plane from one airport to another', () => {
        let myAirport = new Airport('sergeAirport')

        myAirport.airports = [{name:'Boing', planes:['jfk', 'marchal']},
        {name:'kenedy', planes:['alpha', 'beta']}
        ]

        myAirport.airports[0].planes.push(myAirport.airports[1].planes[0])

        expect(myAirport.airports[0]).toEqual({name:'Boing', planes:['jfk', 'marchal', 'alpha']})
        expect(myAirport.airports.length).toBeGreaterThan(1)
    })

})