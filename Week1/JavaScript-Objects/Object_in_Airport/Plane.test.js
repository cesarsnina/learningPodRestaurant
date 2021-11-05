const Plane = require('./Plane')
const Passenger = require('./Passenger')

describe('Plane Class', () => {

    //varible for Passenger and Plane
    let Passenger3 = new Passenger('moanic')
    const newPlane = new Plane('Delta')

    test('Plane has a name', () => {
        expect(typeof newPlane.name).toBe('string')
        expect(newPlane.name).toBe('Delta')
    })
    
    test('Plane is type string', () => {
        expect(typeof newPlane.name).toBe('string')
    })

    test('Plane has an origin and a destination', () => {
        newPlane.setOrigin('Cairo')
        newPlane.setDestination('Halifax')

        expect(newPlane.origin).toBe('Cairo')
        expect(newPlane.destination).toBe('Halifax')

    })

    test('Plan can add Passengers', () => {
        newPlane.addPassenger(Passenger3)
        expect(newPlane.passengers.length).toBe(1)
    })
})