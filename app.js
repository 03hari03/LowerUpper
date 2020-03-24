var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

//Require the Router we defined in movies.js
app.post('/convertUpper', (req, res) => {
    //Check if all fields are provided and are valid:
    if (!req.body.json) {
        res.status(400);
        res.json({ message: "Bad Request" });
    }
    else {
        var names = req.body.json.names;
        var address = req.body.json.address;
        var namesUpper = [];
        var addressUpper = [];
        var response = {};
        names.forEach((value) => {
            namesUpper.push(value.toUpperCase());
        });
        address.forEach((value) => {
            addressUpper.push(value.toUpperCase());
        });
        response = {
            names: namesUpper,
            address: addressUpper
        };
        console.log(response)
        res.json(response);
    }
});

app.post('/convertLower', (req, res) => {
    //Check if all fields are provided and are valid:
    if (!req.body.json) {
        res.status(400);
        res.json({ message: "Bad Request" });
    } 
    else {
        var names = req.body.json.names;
        var address = req.body.json.address;
        var namesLower = [];
        var addressLower = [];
        var response = {};
        names.forEach((value) => {
            namesLower.push(value.toLowerCase());
        });
        address.forEach((value) => {
            addressLower.push(value.toLowerCase());
        });
        response = {
            names: namesLower,
            address: addressLower
        };
        console.log(response)
        res.json(response);
    }
});

app.listen(3000);


