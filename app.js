import 'dotenv/config'
import express from "express";
import cors from "cors";
import Joi from "joi";
import {Resend} from "resend";

const app = express();

app.use(express.json());
app.use(cors());

const schema = Joi.object({
    to: Joi.string().email().required(),
    username: Joi.string().required()
})

const validate = (req, res, next) => {
    const {error} = schema.validate(req.body);

    if(error){
        return res.status(400).send(error.details[0].message);
    }

    next();
}

app.post("/", validate, async (req, res) => {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const {to, username} = req.body;

        await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to,
            subject: "Yeni Konumdan Discord Girişini Doğrula",
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html dir="ltr" lang="en">
            
              <head>
                <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
                <style>
                  @font-face {
                    font-family: 'Helvatica';
                    font-style: normal;
                    font-weight: 400;
                    mso-font-alt: 'sans-serif';
            
                  }
            
                  * {
                    font-family: 'Helvatica', sans-serif;
                  }
                </style>
              </head>
              <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Yeni konumdan discord girişini doğrula<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>
              </div>
            
              <body style="background-color:rgb(249,249,249)">
                <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em">
                  <tbody>
                    <tr style="width:100%">
                      <td>
                        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="text-align:center;padding-top:2.5rem;padding-bottom:2.5rem">
                          <tbody>
                            <tr>
                              <td><img alt="Discord" height="38" src="https://ci3.googleusercontent.com/meips/ADKq_Nb5ax2Dw95owSyduMse6gWIZx_i1EsIfAvUeqb5rU5YhlXMLMEF5TYL8ATNnfQWN2dfeUixF4dVM-Zzau2o464U42jc-z3wuxkkcAGDHa-7iiaImXcT5Z3Lp4a5k2ozTo8a=s0-d-e1-ft#https://cdn.discordapp.com/email_assets/592423b8aedd155170617c9ae736e6e7.png" style="display:inline;outline:none;border:none;text-decoration:none" width="138" /></td>
                            </tr>
                          </tbody>
                        </table>
                        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-top:2.5rem;padding-bottom:2.5rem;padding-left:3rem;padding-right:3rem;background-color:rgb(255,255,255);border-color:rgb(128,128,128)">
                          <tbody>
                            <tr>
                              <td>
                                <h2 class="" style="color:rgb(79,84,92);font-weight:500;font-size:1.25rem;line-height:1.75rem">Selam ${username},</h2>
                                <p style="font-size:1rem;line-height:1.5rem;margin:16px 0;margin-top:0.75rem;margin-bottom:0.75rem;color:rgb(116,127,141);text-align:left">Birisi Discord hesabına farklı bir konumdan giriş yapmayı denedi. Eğer bunu sen yaptıysan aşağıdaki bağlantıyı takip edip hesabına bu konumdan giriş yapılmasını onayla.</p>
                                <p style="font-size:1rem;line-height:1.5rem;margin:16px 0;margin-top:0.75rem;margin-bottom:0.75rem;color:rgb(116,127,141);text-align:left"><strong>IP Adresi:</strong> 000<span>.</span>000<span>.</span>000<span>.</span>000<br /><strong>Konum:</strong> Istanbul, Türkiye</p>
                                <p class="" style="font-size:1rem;line-height:1.5rem;margin:16px 0;margin-top:0.75rem;margin-bottom:0.75rem;color:rgb(116,127,141);text-align:left">Bu işlemden haberin yoksa buraya tıklayarak <!-- --> <strong><a href="#" target="_blank" style="color:rgb(88,101,242);text-decoration-line:none">şifreni sıfırla ve tüm cihazlarda oturumu kapat.</a></strong></p>
                                <div style="padding-top:1.25rem;padding-left:1.5rem;padding-right:1.5rem;padding-bottom:0.625rem;text-align:center"><a style="background-color:rgb(88,101,242);color:rgb(255,255,255);border-radius:0.25rem;padding-top:1rem;padding-bottom:1rem;padding-left:1.25rem;padding-right:1.25rem;border-width:0px;cursor:pointer;display:inline-block;line-height:100%;text-decoration:none;max-width:100%;padding:16px 20px 16px 20px" target="_blank"><span><!--[if mso]><i style="letter-spacing: 20px;mso-font-width:-100%;mso-text-raise:24" hidden>&nbsp;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:12px">Girişi Doğrula</span><span><!--[if mso]><i style="letter-spacing: 20px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a></div>
                                <div style="padding-top:1.5rem;padding-bottom:1.5rem">
                                  <hr style="width:100%;border:none;border-top:1px solid #eaeaea" />
                                </div>
                                <p style="font-size:0.75rem;line-height:1rem;margin:16px 0;margin-top:0.75rem;margin-bottom:0.75rem;color:rgb(116,127,141);text-align:left">Yardım mı lazım? <!-- --> <a href="#" style="color:rgb(88,101,242);line-height:100%;text-decoration:none;display:inline-block;max-width:100%;padding:0px 0px 0px 0px" target="_blank"><span><!--[if mso]><i style="letter-spacing: 0px;mso-font-width:-100%;mso-text-raise:0" hidden>&nbsp;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:0">Destek ekibiyle görüş</span><span><!--[if mso]><i style="letter-spacing: 0px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a> <!-- --> veya Twitter <!-- --> <a href="#" style="color:rgb(88,101,242);line-height:100%;text-decoration:none;display:inline-block;max-width:100%;padding:0px 0px 0px 0px" target="_blank"><span><!--[if mso]><i style="letter-spacing: 0px;mso-font-width:-100%;mso-text-raise:0" hidden>&nbsp;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:0">@discord</span><span><!--[if mso]><i style="letter-spacing: 0px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a> <!-- -->adresinden bizi dürt.<br />Geri bildirim göndermek mi istiyorsun? <!-- --> <a href="#" style="color:rgb(88,101,242);line-height:100%;text-decoration:none;display:inline-block;max-width:100%;padding:0px 0px 0px 0px" target="_blank"><span><!--[if mso]><i style="letter-spacing: 0px;mso-font-width:-100%;mso-text-raise:0" hidden>&nbsp;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:0">Geri bildirim sitemizden</span><span><!--[if mso]><i style="letter-spacing: 0px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a> <!-- --> bizimle düşüncelerini paylaş.</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding-top:1.25rem;padding-bottom:1.25rem">
                          <tbody>
                            <tr>
                              <td>
                                <p style="font-size:0.75rem;line-height:1.5rem;margin:0px;color:rgb(153,170,181);text-align:center">Discord tarafından gönderildi <span>• </span><a href="#" style="color:rgb(30,176,244);text-decoration-line:none;line-height:100%;text-decoration:none;display:inline-block;max-width:100%;padding:0px 0px 0px 0px" target="_blank"><span><!--[if mso]><i style="letter-spacing: 0px;mso-font-width:-100%;mso-text-raise:0" hidden>&nbsp;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:0">Bloğumuza göz at</span><span><!--[if mso]><i style="letter-spacing: 0px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a><span> • </span><a href="#" style="color:rgb(30,176,244);text-decoration-line:none;line-height:100%;text-decoration:none;display:inline-block;max-width:100%;padding:0px 0px 0px 0px" target="_blank"><span><!--[if mso]><i style="letter-spacing: 0px;mso-font-width:-100%;mso-text-raise:0" hidden>&nbsp;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:0">@discord</span><span><!--[if mso]><i style="letter-spacing: 0px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a></p>
                                <p style="font-size:0.75rem;line-height:1.5rem;margin:0px;color:rgb(153,170,181);text-align:center">444 De Haro Street, Suite 200, San Francisco, CA 94107</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </body>
            </html>`
        });

        res.status(200).send({message: "Email sent successfully"});
    } catch (error) {
        res.status(500).send({message: "Error sending email"});
    }
})


app.listen(3000, () => {
    if(!process.env.RESEND_API_KEY){
        throw `Abort: You need to define RESEND_API_KEY in the .env file.`;
    }
    console.log('Listening on http://localhost:3000');
})