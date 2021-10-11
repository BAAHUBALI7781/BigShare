const path=require('path');
module.exports.home_page=function(req,res){
    return res.sendFile('/index.html');
}