const loki = require('lokijs');
// TODO if db.json does not exist we need to create it
const database = new loki('db.json');
const fs = require('fs');
const rawdata = fs.readFileSync('rawData.json');

database.autosave = true;
var accData = database.addCollection('accData');

var acc = JSON.parse(rawdata).acc;
var hash = JSON.parse(rawdata).hash;

setupDB = () => {
    acc.forEach(item => {
        accData.insert({
            'number': item,
            'token': hash[acc.indexOf(item)] 
        });
    });
}

setupDB();

database.saveDatabase();

module.exports = accData;
