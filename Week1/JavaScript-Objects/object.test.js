const pusheen = require('./object')

describe('pusheen class data type', () => {
    //name is type of string
    test('name should be string', () => {
        //create instance of the class

        expect (typeof pusheen.name).toBe ("string")
    })

})