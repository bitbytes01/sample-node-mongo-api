var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Bear = require('./app/models/bear');
var router = require('./app/routes/baseRoutes');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.port || 8081;

app.use('/api', router);

app.listen(port);

console.log('port number:' + port);

// use sample-node-mongodb
//db.createUser({ user: "root", pwd: "root",
//roles: [{ role:"dbOwner",db: "sample-node-mongodb" } ] })

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/sample-node-mongodb?authSource=admin");


// var MongoClient = require('mongodb').MongoClient,
//     assert = require('assert');

// var uri = "mongodb://localhost:27017";

// MongoClient.connect(uri, function (err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     // perform actions on the collection object
//     client.close();
// });