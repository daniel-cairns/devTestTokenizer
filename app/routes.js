const express = require('express');
const router = express.Router();
const app = require('./index');
// var loki = require('lokijs');
// var db = new loki('db.json');

var db = require('./database');

router.get('/', async (req,res) => {
    await req;
    let data = 'home';

    res.render('index', {data:data});
});

router.get('/tokenize', async (req,res) => {
    await req;
    let data = await db.getCollection('cards');
    let s = await db.serialize();
    
    console.log(s);
    res.render('index', {data:data});
});

router.get('/detokenize', async (req,res) => {
    await req;
    let data = req.route.path;
    
    res.render('index', {data:data});
});




module.exports = router;