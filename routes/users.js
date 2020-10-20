var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const geolib = require('geolib');


/**********************************************************
 * Helpers
 **********************************************************/


function findNearbyUsers(users, lat, lng) {
    let assaultPoint = { latitude: lat, longitude: lng };
    let usersToNotify = [];
    let radiusMeters = 100 * 1000;  // 100km
    for (let user of users) {
        let userPoint = { latitude: user.lat, longitude: user.lng };
        if ( geolib.isPointWithinRadius(assaultPoint, userPoint, radiusMeters) ) {
            usersToNotify.push(user);
        }
    }

    return usersToNotify;
}


function emailUsers(users, subject, body) {
    console.log('subject:', subject);
    console.log('body:', body);
    console.log('users:', users);
}


/**********************************************************
 * Routes
 **********************************************************/


router.get('/', async (req, res) => {
    try {
        let results = await db(`SELECT * FROM users`);
        let users = results.data;
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});


router.post('/', async (req, res) => {
    let { user_name, user_email, lat, lng } = req.body;

    if (!user_name || !user_email || !lat || !lng) {
        res.status(400).send({ error: 'Required data incomplete' });
        return;
    }

    let sql = `
        INSERT INTO users
        (user_name, user_email, lat, lng)
        VALUES
        ('${user_name}', '${user_email}', ${lat}, ${lng});
        SELECT LAST_INSERT_ID();
    `;

    try {
        // Insert assault and get its ID
        let results = await db(sql);
        let newId = results.data[0].insertId;
        // Get that user
        results = await db(`SELECT * FROM users WHERE id = ${newId}`);
        let user = results.data[0];
        res.status(201).send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});


router.post('/send-alert', async (req, res) => {
    let { subject, body, lat, lng } = req.body;

    // Query users
    let results;
    try {
        results = await db('SELECT * FROM users');
    } catch (err) {
        res.status(500).send(err);
        return;
    }

    // Notify ones nearby (if applicable)
    let usersToNotify = findNearbyUsers(results.data, lat, lng);
    if (usersToNotify.length) {
        emailUsers(usersToNotify, subject, body);
    }

    // Give the client some useful feedback
    res.send({ message: `Emailed ${usersToNotify.length} user(s)` });
});


module.exports = router;