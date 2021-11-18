const sqlite3 = require('sqlite3').verbose();

function initialise(){
    const db = new sqlite3.Database('./restaurants.sqlite');

    try {
        db.serialize(function() {
            db.run("CREATE TABLE RESTAURANT (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, imagelink TEXT)")
        })

        db.serialize(function() {
            db.run("CREATE TABLE MENU (id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT, restaurant_id INTEGER, FOREIGN KEY (restaurant_id) References restaurants(id))")
        })

        db.serialize(function() {
            db.run("CREATE TABLE MENU ITEMS (id INTEGER PRIMARY KEY AUTOINCREMENT,itemName TEXT, price INTEGER, menu_id INTEGER, FOREIGN KEY (menu_id) References Menu(id))")
        })
    }
    
    finally{
        db.close();
    }
}