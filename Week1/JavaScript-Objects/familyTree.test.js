let Person = require('./familyTree')


describe('Person class data type', () => {
    //name is type of string
    test('name should be string', () => {
        //create instance of the class
        let personTest = new Person("serge")
        expect(typeof personTest.name).toBe("string")
    })

    //parents is type of an array
    test('parents should be an array', () => {
        //create instance of the class
        let personTest = new Person("serge");
        personTest.addParents('ami');
        personTest.addParents('titi');
        
        expect(personTest.parents).toHaveLength(2)
    })

     //childOf is type of a function
     test('childOf should be a function', () => {
        //create instance of the class
        let personTest = new Person("serge")
        expect(typeof personTest.childOf).toBe('function')
    })

     //addParent is type of a function
     test('addParent should be a function', () => {
        //create instance of the class
        let personTest = new Person("serge")
        expect(typeof personTest.addParents).toBe('function')
    })


})