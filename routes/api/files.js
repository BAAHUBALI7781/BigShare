const express=require('express'); 
const router=express.Router();

const fileController=require('../../controllers/file_controller');

router.post('/',fileController.control_file);

module.exports=router;