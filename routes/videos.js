var express = require('express');
var router = express.Router();
var user = require('../controllers/videoControllers')
/* GET home page. */
router.get('/getVideo', user.getVideo);

module.exports = router;