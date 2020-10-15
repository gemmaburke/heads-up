require("dotenv").config();
var express = require('express');
var router = express.Router();

const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

//Create database connection
const con = mysql.createConnection({
    host: DB_HOST || "127.0.0.1",
    user: DB_USER || "root",
    password: DB_PASS,
    database: DB_NAME || "rape_app",
    multipleStatements: true
});

/* GET all attacks. */
router.get('/', function(req, res) { 
   let attacks = `SELECT * FROM assaults`;
   //select everything from the assaults table
   con.query(attacks, (error, results) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
    res.json(results);
  });
  
});

/* GET all attacks by location */
router.get('/location', function(req, res) { 
    let attacksByLocation = `SELECT location FROM assaults`;
    //select everything from the assaults table
    con.query(attacksByLocation, (error, results) => {
     if (error) {
       return console.error(error.message);
     }
     console.log(results);
     res.json(results);
   });
   
 });

 /* GET all attacks by date */
router.get('/date', function(req, res) { 
    let attacksByDate = `SELECT date FROM assaults`;
    //select everything from the assaults table
    con.query(attacksByDate, (error, results) => {
     if (error) {
       return console.error(error.message);
     }
     console.log(results);
     res.json(results);
   });
   
 });



<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 8004043af5aad16629b70e2bc45768899a3911c5
