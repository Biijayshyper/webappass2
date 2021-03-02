let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to Contact Model
let Business = require('../models/contacts');

// Get Route
router.get('/', (req, res, next) => {
    console.log('test');
    Business.find((err, contactlist) =>{
        if(err)
        {
            return console.error(err);
            //console.log('Test4444444');
        }
        else{
            res.render('contacts', {title: 'contacts', Contactlist: contactlist });
            console.log(contactlist);
        }
    });
});

module.exports = router;