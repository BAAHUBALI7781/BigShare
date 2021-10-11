const nodemailer=require('../config/nodemailer');

exports.newLink=(link,email)=>{

    let htmlString=nodemailer.renderTemplate({link,email},'./sendMail.ejs')
    nodemailer.transporter.sendMail({
        from:'sharebig4u',
        to:email,
        subject:'Shared file',
        html:htmlString
    },(err,info)=>{
        if(err){
            console.log("Error in sending mail",err);
            return;
        }
        else{
            console.log('Mail sent');
            return;
        }
    })
}