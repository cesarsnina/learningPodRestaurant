const Server = require('../src/Server')

describe('ChargingStation Class', () => {

    const newServer = new Server('Linux-beta-345')

    test('Server has a server Id', () => {
        expect(newServer.serverId).toBe('Linux-beta-345')
    })

    test('Server has an array of activities', () => {
        expect(typeof newServer.activities === [])
    })

    test('Server can add an activity(checkIn)', () => {
        let scooterActiv = {
            scooterName: "scooter123", 
            station: undefined, 
            status: "is In"
        }
        newServer.checkOut("scooter123")
        expect.arrayContaining(expect([expect.objectContaining({status: 'is In'})]))
    })

    test('Server can add an activity(checkOut)', () => {
        let scooterActiv = {
            scooterName: "scooter123", 
            station: undefined, 
            status: "is Out"
        }
        newServer.checkOut("scooter123")
        expect.arrayContaining(expect([expect.objectContaining({status: 'is Out'})]))
    })


    test('is an instance of Server', () => {
        expect(newServer instanceof Server).toBeTruthy()
    })
})