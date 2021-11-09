let {Person, CrewMember, Passenger} = require('./Person')
let Bag = require('./Bag')
//test for Person
describe('Person class test', () => {

    //Person has a name
    test('Person should has a name', () => {
        //create instance for Passengger
        let newPerson = new Person('serge')
        expect(typeof newPerson.name).toBe('string')
    })

    //Person can have more than one bag
    test('Person should have 1 or more bags', () => {
        //create instance for Person
        let newPerson2 = new Person('nikiema')
        newPerson2.addBag(4)
        expect(newPerson2.bags.length).toBe(1)
    })



      //Passenger has an instance
      test('is an intance of Passenger', () => {
        //create instance for Passengger
        let newPassenger = new Passenger('serge')
        expect(newPassenger instanceof Passenger).toBeTruthy()
    })

      //CrewMember has an instance
      test('is an intance of crewmember', () => {
        //create instance for Passengger
        let newMember = new CrewMember('serge')
        expect(newMember instanceof CrewMember).toBeTruthy()
    })

    
})