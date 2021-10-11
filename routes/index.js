const express=require('express'); 
const router=express.Router();

const homeController=require('../controllers/home_controller');

router.get('/',homeController.home_page);
router.use('/api/files',require('./api/files'));
router.use('/files',require('./download'));


module.exports=router;