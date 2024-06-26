const Router = require('express');
const router = new Router();
const controller = require('../controllers/userDataController');


//router.get('/get-articles', controller.getAllArticles);
router.get('/get-all', controller.GetAll);
router.post('/post-userdata', controller.PostUserData);



module.exports = router;
