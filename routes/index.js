var express = require('express');
var router = express.Router();
var { add_user, select, get_sin, Search_users, Limit_Skip, Update ,Delete} = require('../controller/usercontroller')

/* GET home page. */
router.get('/', select);
router.get('/get_sin/:firstName', get_sin);
router.get('/Search_user', Search_users)
router.get('/pagination', Limit_Skip)
router.post('/add_u', add_user);
router.post('/Update_u', Update)
router.get('/Delete_u/:id', Delete)

module.exports = router;

