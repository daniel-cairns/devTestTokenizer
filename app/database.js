var loki = require('lokijs');
var database = new loki('db.json');

database.autosave = true;
var people = database.addCollection('people');
people.insert({
    'name' : 'dan', 'id': 'nutjob'
});

var cardData = database.addCollection('cards');
cardData.insert(
    { 1: [
        '4111-1111-1111-1111',
        '4444-3333-2222-1111',
        '4444-1111-2222-3333',
    ]}
);

database.saveDatabase();

db = database;

module.exports = db;
