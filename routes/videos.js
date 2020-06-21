var express = require('express');
var router = express.Router();
var video = require('../controllers/videoControllers')
/* GET home page. */
router.get('/search', video.getVideoList);

module.exports = router;