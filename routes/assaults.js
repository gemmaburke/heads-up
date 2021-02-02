var express = require('express');
var router = express.Router();
const db = require("../model/helper");


/**********************************************************
 * Helpers
 **********************************************************/

 /**
  * Add 'date' and 'time' properties to 'assault'
  **/

function splitDateTime(assault) {
    let isoDate = assault.date_time.toISOString();
    assault.date = isoDate.substr(0, 10);
    assault.time = isoDate.substr(11, 5);

    return assault;
}


/**********************************************************
 * Routes
 **********************************************************/


router.get('/', async (req, res) => {
    try {
        let results = await db(`SELECT * FROM assaults ORDER BY date_time`);
        let assaults = results.data;
        for (let i=0; i<assaults.length; i++) {
            assaults[i] = splitDateTime(assaults[i]);
        }
        res.send(assaults);
    } catch (err) {
        res.status(500).send(err);
    }
});


router.post('/', async (req, res) => {
    let { date, time, location, description, lat, lng } = req.body;
    let date_time = date + ' ' + time;

    let sql = `
        INSERT INTO assaults
        (date_time, location, description, lat, lng)
        VALUES
        ('${date_time}', '${location}', '${description}', ${lat}, ${lng});
        SELECT LAST_INSERT_ID();
    `;

    try {
        // Insert assault and get its ID
        let results = await db(sql);
        let newId = results.data[0].insertId;
        // Get that assault
        results = await db(`SELECT * FROM assaults WHERE id = ${newId}`);
        let assault = results.data[0];
        assault = splitDateTime(assault);
        res.status(201).send(assault);
    } catch (err) {
        res.status(500).send(err);
    }
});


router.get('/search', async (req, res) => {
    // Build the SELECT statement
    let { date, location } = req.query;
    let sql = 'SELECT * FROM assaults WHERE ';
    if (date && location) {
        sql += `date_time LIKE '%${date}%' AND location LIKE '%${location}%'`;
    } else if (date) {
        sql += `date_time LIKE '%${date}%'`;
    } else {
        sql += `location LIKE '%${location}%'`;
    }
    sql += ' ORDER BY date_time;';
    console.log(sql);
    // Now do it!
    try {
        let results = await db(sql);
        let assaults = results.data;
        for (let i=0; i<assaults.length; i++) {
            assaults[i] = splitDateTime(assaults[i]);
        }
        res.send(assaults);
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router;