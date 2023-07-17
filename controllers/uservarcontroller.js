const userVarifictionModel = require("../models/uservar.js");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const axios = require("axios");
var OTP = Math.floor(1000 + Math.random() * 9000);
const sendOTP = (req, res, user) => {
  let config = {
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  };
  let transporter = nodemailer.createTransport(config);
  let maingenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Fitbuzz Shop",
      link: "https://mailgen.js/",
    },
  });

  let message = {
    from: "uddibhardwaj08@gmail.com",
    to: user,
    subject: "OTP Verification !",
    html: `<!DOCTYPE html>
	<html
	  xmlns="http://www.w3.org/1999/xhtml"
	  xmlns:v="urn:schemas-microsoft-com:vml"
	  xmlns:o="urn:schemas-microsoft-com:office:office"
	>
	  <head>
		<title> </title>
		<!--[if !mso]><!-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<!--<![endif]-->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	  </head>
	
	  <body style="word-spacing: normal; background-color: #fafbfc">
		<table
		  border="0"
		  cellpadding="0"
		  cellspacing="0"
		  width="100%"
		  style="table-layout: fixed; background-color: #f9f9f9"
		  id="bodyTable"
		>
		  <tbody>
			<tr>
			  <td
				style="padding-right: 10px; padding-left: 10px"
				align="center"
				valign="top"
				id="bodyCell"
			  >
				<table
				  border="0"
				  cellpadding="0"
				  cellspacing="0"
				  width="100%"
				  class="wrapperBody"
				  style="max-width: 600px"
				>
				  <tbody>
					<tr>
					  <td align="center" valign="top">
						<table
						  border="0"
						  cellpadding="0"
						  cellspacing="0"
						  width="100%"
						  class="tableCard"
						  style="
							background-color: #fff;
							border-color: #e5e5e5;
							border-style: solid;
							border-width: 0 1px 1px 1px;
						  "
						>
						  <tbody>
							<tr>
							  <td
								style="
								  background-color: #00d2f4;
								  font-size: 1px;
								  line-height: 3px;
								"
								class="topBorder"
								height="3"
							  >
								&nbsp;
							  </td>
							</tr>
							<tr>
							  <td
								style="padding-top: 60px; padding-bottom: 20px"
								align="center"
								valign="middle"
								class="emailLogo"
							  >
								<a
								  href="#"
								  style="text-decoration: none"
								  target="_blank"
								>
								  <img
									alt=""
									border="0"
									src="https://fitbuzzcare.com/assets/images/logos/logo.png"
									style="
									  width: 100%;
									  max-width: 150px;
									  height: auto;
									  display: block;
									"
									width="150"
								  />
								</a>
							  </td>
							</tr>
							<tr>
							  <td
								style="padding-bottom: 20px"
								align="center"
								valign="top"
								class="imgHero"
							  >
								<a
								  href="#"
								  style="text-decoration: none"
								  target="_blank"
								>
								  <img
									alt=""
									border="0"
									src="http://email.aumfusionr.com/vespro/img/hero-img/blue/heroGradient/user-account.png"
									style="
									  width: 100%;
									  max-width: 600px;
									  height: auto;
									  display: block;
									  color: #f9f9f9;
									"
									width="600"
								  />
								</a>
							  </td>
							</tr>
							<tr>
							  <td
								style="
								  padding-bottom: 45px;
								  padding-left: 20px;
								  padding-right: 20px;
								"
								align="center"
								valign="top"
								class="mainTitle"
							  >
								<h2
								  class="text"
								  style="
									color: #000;
									font-family: Poppins, Helvetica, Arial,
									  sans-serif;
									font-size: 28px;
									font-weight: 500;
									font-style: normal;
									letter-spacing: normal;
									line-height: 36px;
									text-transform: none;
									text-align: center;
									padding: 0;
									margin: 0;
								   
								  "
								>
								  Hi ${user}
								</h2>
							  </td>
							</tr>
						  
							<tr>
							  <td
								style="
								  padding-bottom: 30px;
								  padding-left: 20px;
								  padding-right: 20px;
								"
								align="center"
								valign="top"
								class="subTitle"
							  >
								<h4
								  class="text"
								  style="
									color: #999;
									font-family: Poppins, Helvetica, Arial,
									  sans-serif;
									font-size: 16px;
									font-weight: 500;
									font-style: normal;
									letter-spacing: normal;
									line-height: 24px;
									text-transform: none;
									text-align: center;
									padding: 0;
									margin: 0;
								  "
								>
								  Thanks for registering at Fitbuzz.com! We are glad
								  you have chosen to be a part of our community and
								  we hope you enjoy your stay.
								</h4>
								<br />
								<h4
								  class="text"
								  style="
									color: #999;
									font-family: Poppins, Helvetica, Arial,
									  sans-serif;
									font-size: 16px;
									font-weight: 500;
									font-style: normal;
									letter-spacing: normal;
									line-height: 24px;
									text-transform: none;
									text-align: center;
									padding: 0;
									margin: 0;
								  "
								>
								  Please enter the code in the website to continue
								  your registration process
								</h4>
							  </td>
							</tr>
							<tr>
							  <td
								style="padding-left: 20px; padding-right: 20px"
								align="center"
								valign="top"
								class="containtTable ui-sortable"
							  >
								<table
								  border="0"
								  cellpadding="0"
								  cellspacing="0"
								  width="100%"
								  class="tableButton"
								  style=""
								>
								  <tbody>
									<tr>
									  <td
										style="
										
										  padding-bottom: 20px;
										"
										align="center"
										valign="top"
									  >
										<table
										  border="0"
										  cellpadding="0"
										  cellspacing="0"
										  align="center"
										>
										  <tbody>
											<tr>
											  <td
												style="
												  background-color: rgb(
													0,
													210,
													244
												  );
												  height: 50px;
												  width: 150px;
												  font-size: 22px;
												  padding: 12px 35px;
												  border-radius: 50px;
												"
												align="center"
												class="ctaButton"
											  >
												<a
												  href="#"
												  style="
													color: #fff;
													font-family: Poppins, Helvetica,
													  Arial, sans-serif;
													font-size: 30px;
													font-weight: 600;
													font-style: normal;
													letter-spacing: 1px;
													line-height: 20px;
													text-transform: uppercase;
													text-decoration: none;
													display: block;
												  "
												  target="_blank"
												  class="text"
												  >${OTP}</a
												>
											  </td>
											  <br />
											</tr>
										  </tbody>
										</table>
										<br />
										<br />
										<p
										  class="text"
										  style="
										  color: #999;
										  font-family: Poppins, Helvetica, Arial,
											sans-serif;
										  font-size: 16px;
										  font-weight: 500;
										  font-style: normal;
										  letter-spacing: normal;
										  line-height: 24px;
										  text-transform: none;
										  text-align: center;
										  padding: 0;
										  margin: 0;
										  "
										>
										  If you encounter any difficulties during
										  the code verification process or have any
										  questions, please do not hesitate to
										  contact our customer support team at
										  fitbuzz01@gmail.com . Our
										  dedicated team is ready to assist you and
										  provide any necessary guidance.
										</p>
										<br />
										<br />
										<p
										  class="text"
										  style="
										  color: #999;
										  font-family: Poppins, Helvetica, Arial,
											sans-serif;
										  font-size: 16px;
										  font-weight: 500;
										  font-style: normal;
										  letter-spacing: normal;
										  line-height: 24px;
										  text-transform: none;
										  text-align: center;
										  padding: 0;
										  margin: 0;
										  "
										>
										  Thank you for your attention and support.
										  We look forward to your prompt action in
										  completing the code verification.
										</p>
									  </td>
									</tr>
								  </tbody>
								</table>
							  </td>
							</tr>
							<tr>
							  <td
								style="font-size: 1px; line-height: 1px"
								height="20"
							  >
								&nbsp;
							  </td>
							</tr>
						  </tbody>
						</table>
						<table
						  border="0"
						  cellpadding="0"
						  cellspacing="0"
						  width="100%"
						  class="space"
						>
						  <tbody>
							<tr>
							  <td
								style="font-size: 1px; line-height: 1px"
								height="30"
							  >
								&nbsp;
							  </td>
							</tr>
						  </tbody>
						</table>
					  </td>
					</tr>
				  </tbody>
				</table>
				<table
				  border="0"
				  cellpadding="0"
				  cellspacing="0"
				  width="100%"
				  class="wrapperFooter"
				  style="max-width: 600px"
				>
				  <tbody>
					<tr>
					  <td align="center" valign="top">
						<table
						  border="0"
						  cellpadding="0"
						  cellspacing="0"
						  width="100%"
						  class="footer"
						>
						  <tbody>
							<tr>
							  <td
								style="
								  padding-top: 10px;
								  padding-bottom: 10px;
								  padding-left: 10px;
								  padding-right: 10px;
								"
								align="center"
								valign="top"
								class="socialLinks"
							  >
								<a
								  href="#facebook-link"
								  style="display: inline-block"
								  target="_blank"
								  class="facebook"
								>
								  <img
									alt=""
									border="0"
									src="http://email.aumfusionr.com/vespro/img/social/light/facebook.png"
									style="
									  height: auto;
									  width: 100%;
									  max-width: 40px;
									  margin-left: 2px;
									  margin-right: 2px;
									"
									width="40"
								  />
								</a>
								<a
								  href="#twitter-link"
								  style="display: inline-block"
								  target="_blank"
								  class="twitter"
								>
								  <img
									alt=""
									border="0"
									src="http://email.aumfusionr.com/vespro/img/social/light/twitter.png"
									style="
									  height: auto;
									  width: 100%;
									  max-width: 40px;
									  margin-left: 2px;
									  margin-right: 2px;
									"
									width="40"
								  />
								</a>
								<a
								  href="#pintrest-link"
								  style="display: inline-block"
								  target="_blank"
								  class="pintrest"
								>
								  <img
									alt=""
									border="0"
									src="http://email.aumfusionr.com/vespro/img/social/light/pintrest.png"
									style="
									  height: auto;
									  width: 100%;
									  max-width: 40px;
									  margin-left: 2px;
									  margin-right: 2px;
									"
									width="40"
								  />
								</a>
								<a
								  href="#instagram-link"
								  style="display: inline-block"
								  target="_blank"
								  class="instagram"
								>
								  <img
									alt=""
									border="0"
									src="http://email.aumfusionr.com/vespro/img/social/light/instagram.png"
									style="
									  height: auto;
									  width: 100%;
									  max-width: 40px;
									  margin-left: 2px;
									  margin-right: 2px;
									"
									width="40"
								  />
								</a>
								<a
								  href="#linkdin-link"
								  style="display: inline-block"
								  target="_blank"
								  class="linkdin"
								>
								  <img
									alt=""
									border="0"
									src="http://email.aumfusionr.com/vespro/img/social/light/linkdin.png"
									style="
									  height: auto;
									  width: 100%;
									  max-width: 40px;
									  margin-left: 2px;
									  margin-right: 2px;
									"
									width="40"
								  />
								</a>
							  </td>
							</tr>
							<tr>
							  <td
								style="padding: 10px 10px 5px"
								align="center"
								valign="top"
								class="brandInfo"
							  >
								<p
								  class="text"
								  style="
									color: #bbb;
									font-family: 'Open Sans', Helvetica, Arial,
									  sans-serif;
									font-size: 12px;
									font-weight: 400;
									font-style: normal;
									letter-spacing: normal;
									line-height: 20px;
									text-transform: none;
									text-align: center;
									padding: 0;
									margin: 0;
								  "
								>
								  ©&nbsp;Plot 176, Basement, Industrial Area Phase
								  1, Panchkula, Haryana 134113 India
								</p>
							  </td>
							</tr>
							<tr>
							  <td
								style="padding: 0px 10px 20px"
								align="center"
								valign="top"
								class="footerLinks"
							  >
								<p
								  class="text"
								  style="
									color: #bbb;
									font-family: 'Open Sans', Helvetica, Arial,
									  sans-serif;
									font-size: 12px;
									font-weight: 400;
									font-style: normal;
									letter-spacing: normal;
									line-height: 20px;
									text-transform: none;
									text-align: center;
									padding: 0;
									margin: 0;
								  "
								>
								  <a
									href="#"
									style="color: #bbb; text-decoration: underline"
									target="_blank"
									>View Web Version </a
								  >&nbsp;|&nbsp;
								  <a
									href="#"
									style="color: #bbb; text-decoration: underline"
									target="_blank"
									>Email Preferences </a
								  >&nbsp;|&nbsp;
								  <a
									href="#"
									style="color: #bbb; text-decoration: underline"
									target="_blank"
									>Privacy Policy</a
								  >
								</p>
							  </td>
							</tr>
							<tr>
							  <td
								style="padding: 0px 10px 10px"
								align="center"
								valign="top"
								class="footerEmailInfo"
							  >
								<p
								  class="text"
								  style="
									color: #bbb;
									font-family: 'Open Sans', Helvetica, Arial,
									  sans-serif;
									font-size: 12px;
									font-weight: 400;
									font-style: normal;
									letter-spacing: normal;
									line-height: 20px;
									text-transform: none;
									text-align: center;
									padding: 0;
									margin: 0;
								  "
								>
								  If you have any quetions please contact us
								  <a
									href="#"
									style="color: #bbb; text-decoration: underline"
									target="_blank"
									>support@fitbuzzshop.com.</a
								  >
								  <br />
								  <a
									href="#"
									style="color: #bbb; text-decoration: underline"
									target="_blank"
									>Unsubscribe</a
								  >
								  from our mailing lists
								</p>
							  </td>
							</tr>
							<tr>
							  <td
								style="
								  padding-top: 10px;
								  padding-bottom: 10px;
								  padding-left: 10px;
								  padding-right: 10px;
								"
								align="center"
								valign="top"
								class="appLinks"
							  >
								<a
								  href="#Play-Store-Link"
								  style="display: inline-block"
								  target="_blank"
								  class="play-store"
								>
								  <img
									alt=""
									border="0"
									src="http://email.aumfusionr.com/vespro/img/app/play-store.png"
									style="
									  height: auto;
									  margin: 5px;
									  width: 100%;
									  max-width: 120px;
									"
									width="120"
								  />
								</a>
								<a
								  href="#App-Store-Link"
								  style="display: inline-block"
								  target="_blank"
								  class="app-store"
								>
								  <img
									alt=""
									border="0"
									src="http://email.aumfusionr.com/vespro/img/app/app-store.png"
									style="
									  height: auto;
									  margin: 5px;
									  width: 100%;
									  max-width: 120px;
									"
									width="120"
								  />
								</a>
							  </td>
							</tr>
							<tr>
							  <td
								style="font-size: 1px; line-height: 1px"
								height="30"
							  >
								&nbsp;
							  </td>
							</tr>
						  </tbody>
						</table>
					  </td>
					</tr>
					<tr>
					  <td style="font-size: 1px; line-height: 1px" height="30">
						&nbsp;
					  </td>
					</tr>
				  </tbody>
				</table>
			  </td>
			</tr>
		  </tbody>
		</table>
	  </body>
	</html>
	>`,
  };
  transporter
    .sendMail(message)
    .then(() => {
      return res.status(200).json({
        msg: "OTP has been sent successfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
      });
    });
};
class UserVarController {
  static uservar = async (req, res) => {
    const { phone, email } = req.body;
    const user = await userVarifictionModel.findOne({ email: email });
    if (user) {
      try {
        var findUpdate = await userVarifictionModel.findOneAndUpdate(
          { email: email },
          { $set: { otp: OTP, phone: phone } }
        );

        if (findUpdate) {
          sendOTP(req, res, email);
        } else {
          res.send({ status: "Not found", message: "User not found" });
        }
      } catch (error) {
        res.status(400).send(error);
      }
    } else {
      try {
        const data = new userVarifictionModel({
          email: email,
          otp: OTP,
        });
        await data.save();
        // res.send("otp send");
        sendOTP(req, res, email);
      } catch (error) {
        res.status(500).send(error.message || error);
      }
    }
  };
  static uservarMobile = async (req, res, next) => {
    const { mobile, otp, email } = req.body;
    const username = "mitsentertainment";
    const password = "7914862";
    const message = `Dear user OTP number is ${otp} Mits Group`;
    const sender = "MITSMJ";
    const type = 3;
    const templateId = "1507167263846753724";
    const url = `http://api.bulksmsgateway.in/sendmessage.php?user=${username}&password=${password}&mobile=${mobile}&message=${encodeURIComponent(
      message
    )}&sender=${sender}&type=${type}&template_id=${templateId}`;
    const user = await userVarifictionModel.findOne({ phone: phone });
    if (user) {
      try {
        var findUpdate = await userVarifictionModel.findOneAndUpdate(
          { phone: phone },
          { $set: { otp: otp, email: email } }
        );

        if (findUpdate) {
          try {
            const response = await axios
              .post(url)
              .then((response) => {
                res.json({ response: response.data });
              })
              .catch((error) => {
                res.status(500).json({ message: error });
              });
          } catch (error) {
            res.send(error);
          }
        } else {
          res.send({ status: "Not found", message: "User not found" });
        }
      } catch (error) {
        res.status(400).send(error);
      }
    } else {
      try {
        const data = new userVarifictionModel({
          email: email,
          phone: phone,
          otp: otp,
        });
        await data.save();
        try {
          const response = await axios
            .post(url)
            .then((response) => {
              res.json({ response: response.data });
            })
            .catch((error) => {
              res.status(500).json({ message: error });
            });
        } catch (error) {
          res.send(error);
        }
      } catch (error) {
        res.status(500).send(error.message || error);
      }
    }
  };
  static otpvarification = async (req, res) => {
    const email = req.body.email;
    const otp = req.body.otp;
    try {
      const Data = await userVarifictionModel
        .find({ email: email })
        .then((data) => {
          if (data[0].otp == otp) {
            res.status(200).send("OTP has been verfied successfully");
          } else {
            res.status(500).send("OTP is wrong. Please try again");
          }
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    } catch (error) {
      res.status(500).send(error.message || error);
    }
  };
  static Resend = async (req, res) => {
    var email = req.body.email;

    try {
      var findUpdate = await userVarifictionModel.findOneAndUpdate(
        { email: email },
        { $set: { otp: OTP } }
      );

      if (findUpdate) {
        sendOTP(req, res, email);
      } else {
        res.send({ status: "Not found", message: "User not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  };
  static Delete = async (req, res) => {
    const email = req.body.email;
    try {
      userVarifictionModel.findOneAndDelete({ email }, function (err, docs) {
        if (!err) {
          res.send({ code: 200, message: "Delete Success" });
        } else {
          res.send({ code: 400, message: "Delete Err" });
        }
      });
    } catch (error) {
      res.status.send(error);
    }
  };
}
module.exports = UserVarController;
