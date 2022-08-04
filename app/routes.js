const app = require('./index');
const db = require('./database');
const express = require('express');

const router = express.Router();

const fs = require('fs');
const rawdata = fs.readFileSync('rawData.json');

var acc = JSON.parse(rawdata).acc;
var hash = JSON.parse(rawdata).hash;

router.get('/tokenize', (req,res) => {
    const Output = []
    acc.forEach(row => {
        let found = db.findOne({"number": { '$eq': row}});
        Output.push(found.token);
    });
    res.setHeader('Content-Type', 'application/json');
    res.send({Output}); 
});

router.get('/detokenize', (req,res) => {
    const Output = []
    hash.forEach(row => {
        let found = db.findOne({"token": { '$eq': row}});
        Output.push(found.number);
    });
    res.setHeader('Content-Type', 'application/json');
    res.send({Output});
});

router.post('/tokenize', (req,res) => {
    const Input = req.body.text;
    const Output = []
    Input.forEach(row => {
        let found = db.findOne({"number": { '$eq': row}});
        Output.push(found.token);
    });
    res.setHeader('Content-Type', 'application/json');
    res.send({Output}); 
});

router.post('/detokenize', (req,res) => {
    const Input = req.body.text;
    const Output = []
    Input.forEach(row => {
        let found = db.findOne({"token": { '$eq': row}});
        Output.push(found.number);
    });
    res.setHeader('Content-Type', 'application/json');
    res.send({Output});
});

module.exports = router;