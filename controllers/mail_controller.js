
const mailer=require('../mailers/send_mail');
module.exports.send_mail=async (req,res)=>{
    await mailer.newLink(req.body.big_link,req.body.receiver);
    return res.render("index");
}