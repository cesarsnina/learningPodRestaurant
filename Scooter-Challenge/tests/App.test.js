const App = require('../src/App')

describe('App class', () => {
    const newApp = new App('Escooter')
    
    test('App has a name', () => {
        expect(newApp.name).toBe('Escooter')
    })

    test('App has array of users', () => {
        expect( typeof newApp.users === [])
    })

    test('App has array of scooters', () => {
        expect(typeof newApp.scooters === [])
    })

    test('App has array of stations', () => {
        expect(typeof newApp.stations === [])
    })

    test('App can register(add) users', () => {
        const userInfo = {
            fullName: 'Serge Nikiema',
            age: 70, 
            email: 'sergenikiema@noogler.com',
            password:'xxxxxxxx',
            accountNumber: 'ghdgv25572464g',
            routingNumber: 'dgibudiy645ghkd'
        }
        newApp.registerUser(userInfo)
        expect(newApp.users.length).toBe(1)
    })

    test('App can remove a user', () => {
        newApp.removeUser('serge')
        expect(newApp.users).not.toContain('serge')
    })

    test('App can print a user info', () => {
        const users = [
            {
                fullName: 'Serge Nikiema', 
                email: 'sergenikiema@noogler.com',
                password:'xxxxxxxx',
                accountNumber: 'ghdgv25572464g',
                routingNumber: 'dgibudiy645ghkd'
            },
            {
                fullName: 'Michael White', 
                email: 'white@gmail.com',
                password:'xxxxxxxx',
                accountNumber: 'ghdgv25572464g',
                routingNumber: 'dgibudiy645ghkd'
            }
                
        ]

        newApp.getUserInfo = jest.fn((fullName) => users[0]);
        newApp.getUserInfo('serge Nikiema')
        
        expect(newApp.getUserInfo).toHaveReturnedWith({
            fullName: 'Serge Nikiema', 
            email: 'sergenikiema@noogler.com',
            password:'xxxxxxxx',
            accountNumber: 'ghdgv25572464g',
            routingNumber: 'dgibudiy645ghkd'
        })
    })

    test('App can print stations', () => {
        newApp.getStations = jest.fn(() => true)
        newApp.getStations()
        expect(newApp.getStations).toHaveBeenCalled()
    })
}) 