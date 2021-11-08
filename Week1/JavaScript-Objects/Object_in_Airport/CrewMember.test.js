const CrewMember = require('./CrewMember')

describe('CrewMember Class', () => {

    test('crew member as a name', () => {
        let crewMember = new CrewMember('Nikiema')
        expect(crewMember.name).toEqual('Nikiema')
        expect(crewMember.name).toBeDefined()

    })

    test('crew member as a position', () => {
        let crewMember = new CrewMember('Nikiema')
        crewMember.position = 'server'
        expect(crewMember.position).toEqual('server')
        expect(crewMember.position).toBeDefined()

    })

    test('crew member as a staff number', () => {
        let crewMember = new CrewMember('Nikiema')
        crewMember.staffNumber = 38
        expect(crewMember.staffNumber).toBe(38)
        expect(crewMember.staffNumber).toBeDefined()
    })
}) 