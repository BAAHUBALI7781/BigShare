const express=require('express');
const router=express.Router();

const downloadController=require('../controllers/download_controller');
router.get('/:uuid',downloadController.downloadPage);
router.get('/download/:uuid',downloadController.download);
module.exports=router;