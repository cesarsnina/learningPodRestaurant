const fsp = require('fs').promises; // Node Js file system module with promises
const fs = require('fs'); //standard callbacks
const path = require('path') //navigate directories and files

class Pokemon {
    constructor(name, type, special){
        this.name = name ? name : '';
        this.type = type ? type: '';
        this.special = special ? special: '';
    }

    getInfoCallback(name, callback) {
        const db = path.join(__dirname, 'db.json');//look for json file path

        //asynchronously read the content
    fs.readFile(db, (err, data) => {
        //read the content into an array
        const allPokemeon  = JSON.parse(string(data));

        //locate the info for this pokemon
        const pokemon = allPokemeon.find(pokemon => pokemon.name === name)
        callback(err, pokemon);
    })

    }

    getInfoPromise(name){
        const db = path.join(__dirname, 'db.json')

        return new Promise((resolve, reject) => {
            fs.readFile(db, (err, data) => {
                if(err){
                    return reject(err);
                }
                const allPokemeon = JSON.parse(string(data));
                const pokemon  = allPokemeon.find(pokemon => pokemon.name === name);

                resolve(pokemon)
            })
        })
    }

    async getInfoAwait(name){
        const db = path.join(__dirname, 'db.json');

        const data = await fsp.readFile(db);

        const allPokemeon = JSON.parse(string(data));

        const pokemon = allPokemeon.find(pokemon => pokemon.name === name);

        return pokemon
    }

    
}

module.exports = Pokemon