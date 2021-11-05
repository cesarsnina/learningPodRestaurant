let Bag = require('./Bag')

//test for Bag class
describe('Bag class test', () => {

     //Bag have a weight
     test('Bag should have a weight', () => {
        //create instance of the class
        let bagTest = new Bag(4)
        expect(bagTest === 'number')
    })


    //Bag have a no weight
    test('Bag should throw an error if no weight is added', () => {
        //create instance of the class
        expect(() => new Bag()).toThrowError('please add a weight')
    })

})


