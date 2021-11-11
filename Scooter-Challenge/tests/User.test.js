const User = require('../src/User')

describe('User class', () => {
    const newUser = new User('serge')

    test('User has a name', () => {
        expect(newUser.name).toBe('serge')
    })

    test('User has an age', () => {
        newUser.age = 29
        expect(newUser.age).toBe(29)
    })

    test('User has an address', () => {
        newUser.address = '131 Brook St.Elmont, NY 11003'
        expect(newUser.address).toBe('131 Brook St.Elmont, NY 11003')
    })

    test('User has an app', () => {
        newUser.app = 'Electric Scooter Hire'
        expect(newUser.app).toBe('Electric Scooter Hire')
    })

    test('Download is defined', () => {
        expect(newUser.downloadApp).toBeDefined()
    })

    test('Download app return confirmation message', () => {
        const str = 'Electric Scooter Hire App downloaded'
        newUser.downloadApp = jest.fn((str) => str);
        newUser.downloadApp(str)
        expect(newUser.downloadApp).toHaveReturnedWith(str)
    })
})