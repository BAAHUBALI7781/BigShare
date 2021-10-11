const express=require('express');
const router=express.Router();

const downloadController=require('../controllers/download_controller');
const mailController=require('../controllers/mail_controller');

router.get('/:uuid',downloadController.downloadPage);
router.get('/download/:uuid',downloadController.download);
router.post('/sendmail',mailController.send_mail);

module.exports=router;