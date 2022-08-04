require('dotenv').config();
const Cryptr = require('cryptr');
const salt = process.env.SALT;
const cryptr = new Cryptr(salt);


// I have left this one in here to show my thinking.
// I totally over cooked this one to begin with and was thinking you 
// wanted me to hash the acc numbers to match the tokens.
// It's cuurenty broken I realised my mistake when I start to change direction 
// and wrote lin 14.
const tokenize = (data) => {
    var tokens = [];
    return cryptr.encrypt(data);
    
    if (type === '/tokenize') {
        data.forEach(row => {    
            hash = cryptr.encrypt(row);
            tokens.push(hash);    
        });
    }
    
    if (type === '/detokenize') {
            data.forEach(token => {
            decrypted = hash = cryptr.encrypt(token);
            cleaned.push(decrypted);
        });
    }

    return JSON.stringify(tokens);
}

module.exports = tokenize;