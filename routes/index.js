var express = require('express');
var router = express.Router();
const db = require("../model/helper");


// function getAttacks(req, res) {
//   db(`SELECT * FROM assaults ORDER BY id ASC;`)
//   .then((results) => {
//     res.send(results.data);
//   })
//   .catch((err) => res.status(500).send(err));
// }

// Routes

router.get('/', function(req, res, next) {
  res.json( { title: 'Heads Up' });
});

/* GET assaults */

// router.get('/assaults', (req, res) => {
//   db(`SELECT * FROM assaults;`)
//   .then((results) => {
//     res.send(results.data);
//   })
//   .catch((err) => res.status(500).send(err));
// });

// router.get('/assaults/:date', (req, res) => {

//   let date = req.params.date;

//   db(`SELECT time, place, description FROM assaults WHERE date=${date};`)
//   .then((results) => {
//     res.send(results.data);
//   })
//   .catch((err) => res.status(500).send(err));
// });



module.exports = router;
