const {ChargingStation, Station_1} = require('../src/ChargingStation')
const {Scooter} = require('../src/Scooter')


describe('ChargingStation Class', () => {

    const newStation = new ChargingStation('Station_fx123')
    const scooter124 = new Scooter('scooter124')



    test('station has a name', () => {
        expect(newStation.name).toBe('Station_fx123')
    })

    test('station has a location', () => {
        newStation.location = 'Bronx, NY, 10299'
        expect(newStation.location).toBe('Bronx, NY, 10299')
    })

    test('station has scooters', () => {
        expect(typeof newStation.scooters === [])
    })

    test('station can add scooter', () => {
        newStation.addScooter(scooter124)
        expect(newStation.scooters.length).toBe(1)
    })

    test('station can remove a scooter', () => {
        newStation.removeScooter(scooter124)
        expect(newStation.scooters).not.toContain(scooter124)
    })

    test('is an instance of Station_1', () => {
        const station1 = new Station_1('Scooter-hbihf976')
        expect(station1 instanceof Station_1).toBeTruthy()
    })
})