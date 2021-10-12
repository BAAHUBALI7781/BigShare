
const mailer=require('../mailers/send_mail');
module.exports.send_mail=async (req,res)=>{
    await mailer.newLink(req.body.big_link,req.body.receiver,req.body.name);
    return res.redirect('/');
}