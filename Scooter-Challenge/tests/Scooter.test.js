const {Scooter, Scooter_1} = require('../src/Scooter')


describe('Scooter Class', () => {

    const newScooter = new Scooter('fx123')


    test('scooter has a name', () => {
        expect(newScooter.name).toBe('fx123')
    })

    test('scooter has a reference number', () => {
        expect(newScooter.refNumber).not.toBeNull()
    })

    test('scooter has a battery level', () => {
        newScooter.batLevel = 90
        expect(newScooter.batLevel).toBeDefined()
    })

    test('scooter has a health status', () => {
        newScooter.healthStatus = 'Good' || 'Bad'
        expect(newScooter.healthStatus).toBe('Good')
    })

    test('get scooter info', () => {
    const info = {
        name : newScooter.name,
        refNumber: 'hfdhfd666',
        batLevel: 80,
        healthStatus: 'Good'
    }

        newScooter.getInfo = jest.fn(() => info);
        newScooter.getInfo()

        expect(newScooter.getInfo).toHaveReturnedWith(info)
    })

    test('is an instance of Scooter_1', () => {
        const scooter1 = new Scooter_1('Scooter-hbihf976')
        expect(scooter1 instanceof Scooter_1).toBeTruthy()
    })
})