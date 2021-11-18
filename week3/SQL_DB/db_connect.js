
const sqlite3 = require('sqlite3').verbose(); //require the dependencies from sqlite3

const db = new sqlite3.Database('./restaurants.sqlite') // creating new DB instance

try{
    db.serialize(function(){
        // create new table
        db.run("CREATE TABLE RESTAURANT (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, imagelink TEXT)");
        let stmt;

        //insert data
        try{
            stmt = db.prepare('INSERT INTO RESTAURANT(name, imagelink) VALUES (?,?)');
            stmt.run('Rasing Canes', "https://sqlitebrowser.org/dl/")
        }
        finally{
            stmt.finalize();
        }

        //select the rows and console log them
        db.each("SELECT * FROM RESTAURANT", 
        function(err, rows){
            console.log(rows)
        })
    
    })
}
finally{
    //release all ressources
    db.close
}

