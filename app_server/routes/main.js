var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

// GET Home page - http://swissharveyknife.herokuapp.com
router.get('/', ctrlMain.p1);

// GET page 2 - http://swissharveyknife.herokuapp.com/2
router.get('/2', ctrlMain.p2);

// GET page 3 - http://swissharveyknife.herokuapp.com/3
router.get('/3', ctrlMain.p3);

module.exports = router;
