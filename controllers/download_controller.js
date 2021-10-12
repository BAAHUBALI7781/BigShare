
const File=require('../models/file');
const path=require('path');

module.exports.downloadPage=async (req,res)=>{
    try{
        const file=await File.findOne({uuid: req.params.uuid});
        if(!file){
            return res.render('download',{error:'Link has expired!'});
        }
        else{
            return res.render('download',{
                uuid:file.uuid,
                name:file.fileName,
                size:file.size,
                download:`${process.env.APP_BASE_URL}/files/download/${file.uuid}`
            });
        }
    }catch(err){
        return res.render('download',{error:'Internal server error!'});
    }
}
module.exports.download=async (req,res)=>{
    const file=await File.findOne({uuid:req.params.uuid});
    if(!file){
        return res.render('download',{error:'Link has expired!'});
    }
    else
    {
        const filePath=`${__dirname}/../${file.path}`;
        return res.download(filePath);
        
    }

}