
const multer=require('multer');
const path=require('path');
const File=require('../models/file');
const {v4:uuid4}=require('uuid');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueName = `${Date.now()}- ${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
      cb(null, uniqueName);
    }
})

const upload = multer({ storage: storage, limit:{filesize:100000000}}).single('myfile');

module.exports.control_file=(req,res)=>{
     
    
    upload(req,res,async (err)=>{
        if(!req.file)
        {
            res.json({error:'Select a file'});
        } 
        if(err){
            return res.status(500).send({error:'Internal server error'});
        }
        //Store filename in database
        const file = new File({
            fileName:req.file.filename,
            path:req.file.path,
            size:req.file.size,
            uuid:uuid4(),
            
        })
        const response=await file.save();
        return res.json({file:`${process.env.APP_BASE_URL}/files/${response.uuid}`})
    })
}