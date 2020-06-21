var express = require('express');
var router = express.Router();
var user = require('../controllers/userControllers')
/* GET home page. */
router.post('/login', user.getUser);
router.post('/sign', user.insertUser);

module.exports = router;
