const Plane = require('./Plane')
const {Person} = require('./Person')

describe('Plane Class', () => {

    //varible for Person and Plane
    let person3 = new Person('moanic')
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

    test('Plane can add Passengers', () => {
        newPlane.addPassenger(person3)
        expect(newPlane.passengers.length).toBe(1)
    })

    test('Plane has a crew', () => {
         newPlane.crew = 'Avengers'
         expect(newPlane.crew).toBeDefined()
         expect(newPlane.crew).toBe('Avengers')
    })
})