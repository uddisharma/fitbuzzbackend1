// import UserModel from "../models/User.js";
const UserModel = require("../models/User.js");
// import bcrypt from "bcrypt";
const bcrypt = require("bcrypt");
// import session from "express-session";
const session = require("express-session");
// import passport from "passport";
const passport = require("passport");
// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");
// import Mailgen from "mailgen";
const Mailgen = require("mailgen");
// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");
// import transporter from "../config/emailConfig.js";
const transports = require("../config/emailConfig.js");
// import "./passport.js"
require("./passport.js");
var OTP = Math.floor(1000 + Math.random() * 9000);
const SendEmail = (req, res, link, email) => {
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
  // let response = {
  //   body: {
  //     name: email,
  //     intro: "you have received an email from Fitbuzz Shop ",
  //     table: {
  //       data: [
  //         {
  //           description: "Your password reset link is" + " " + link,
  //         },
  //       ],
  //     },
  //     outro: "Valid for 15 mints",
  //   },
  // };
  // let mail = maingenerator.generate(response);
  let message = {
    from: "uddibhardwaj08@gmail.com",
    to: email,
    subject: "Password Reset Link",
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
                                  Hi ${email}
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
                                  You request to reset the password for your account
                                  has been made at
                                  <a href="https://fitbuzzshop.com/"></a>
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
                                  You may now reset the password by clicking the
                                  link below :
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
                                        style="padding-bottom: 20px"
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
                                                  width: fit-content;
                                                  font-size: 16px;
                                                  padding: 12px 35px;
                                                  border-radius: 50px;
                                                "
                                                align="center"
                                                class="ctaButton"
                                              >
                                                <a
                                                  href='${link}'
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
                                                  >Reset Password</a
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
                                          This link can only be used once to log in
                                          and will lead you to a page where you can
                                          set your password. It expires after one
                                          day and nothing will happen if it's not
                                          used.
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
                                          Thanks!
                                        </p>
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
                                          Team Fitbuzz
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
    `,
  };
  transporter
    .sendMail(message)
    .then(() => {
      return res.status(200).json({
        msg: "Password Reset Link sent successfully",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err.message,
      });
    });
};
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
  let response = {
    body: {
      name: user,
      intro: "you have received an email from Fitbuzz Shop",
      table: {
        data: [
          {
            description: "Your OTP for registration " + OTP,
          },
        ],
      },
      outro: "Valid for 15 mints",
    },
  };
  let mail = maingenerator.generate(response);
  let message = {
    from: "uddibhardwaj08@gmail.com",
    to: user,
    subject: "OTP for registration",
    html: mail,
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
        error: err.message,
      });
    });
};
class UserController {
  static userRegistration = async (req, res) => {
    const { name, lastname, phone, email, password, password_confirmation } =
      req.body;
    const user = await UserModel.findOne({ email: email });
    if (user) {
      res.send({ status: "failed", message: "Email already exists" });
    } else {
      if (
        name &&
        lastname &&
        phone &&
        email &&
        password &&
        password_confirmation
      ) {
        if (password === password_confirmation) {
          // sendOTP(req, res, email);
          try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const doc = new UserModel({
              name: name,
              lastname: lastname,
              phone: phone,
              email: email,
              password: hashPassword,
              photo: "",
              alternatephone: "",
              state: "",
              district: "",
              city: "",
              zipcode: "",
              address: "",
            });
            await doc.save();
            const saved_user = await UserModel.findOne({ email: email });
            // Generate JWT Token
            const token = jwt.sign(
              { userID: saved_user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "5d" }
            );
            res.status(201).send({
              status: "success",
              message: "Registration Success",
              token: token,
            });
          } catch (error) {
            console.log(error);
            res
              .status(500)
              .send({ status: "failed", message: "Unable to Register" });
          }
        } else {
          res.send({
            status: "failed",
            message: "Password and Confirm Password doesn't match",
          });
        }
      } else {
        res.send({ status: "failed", message: "All fields are required" });
      }
    }
  };
  static updateproile = async (req, res) => {
    const _id = req.params.id;
    const {
      name,
      lastname,
      phone,
      photo,
      alternatephone,
      state,
      district,
      city,
      zipcode,
      address,
    } = req.body;
    // console.log(name, lastname, phone, photo, alternatephone, state, district);
    try {
      const user = await UserModel.findByIdAndUpdate(_id, {
        name: name,
        lastname: lastname,
        phone: phone,
        photo: photo,
        alternatephone: alternatephone,
        state: state,
        district: district,
        city: city,
        zipcode: zipcode,
        address: address,
      });
      user.save();
      res.status(200).send({
        status: "success",
        message: "Profile updated successfully",
      });
    } catch (err) {
      res.status(500).send({
        status: "failed",
        message: "Unable to update profile",
      });
    }
  };
  static ForgetPassword = async (req, res) => {
    const username = req.user.username;
    const finduser = await UserModel.findOne({ email: username });
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
    let response = {
      body: {
        name: username,
        intro: "you have received an email from Fitbuzz Shop ",
        table: {
          data: [
            {
              description: "Your Password is " + finduser.password,
            },
          ],
        },
        outro: "Your password",
      },
    };
  };
  static userLogin = async (req, res) => {
    // res.send(req.body)
    // const { email, password } = req.body;
    // const isMatch = await bcrypt.compare(password, "123456");
    // res.send(isMatch);
    try {
      const { email, password } = req.body;
      if (email && password) {
        const user = await UserModel.findOne({ email: email });
        if (user != null) {
          const isMatch = await bcrypt.compare(password, user.password);
          if (user.email === email && isMatch) {
            // Generate JWT Token
            const token = jwt.sign(
              { userID: user._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "5d" }
            );
            res.send({
              status: "success",
              message: "Login Success",
              token: token,
            });
          } else {
            res.send({
              status: "failed",
              message: "Email or Password is not Valid",
            });
          }
        } else {
          res.send({
            status: "failed",
            message: "You are not a Registered User",
          });
        }
      } else {
        res.send({ status: "failed", message: "All Fields are Required" });
      }
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", message: "Unable to Login" });
    }
  };
  static AllUsers = async (req, res) => {
    try {
      const userData = await UserModel.find();
      res.status(200).json({ users: userData, msg: "Success" });
    } catch (error) {
      console.log(error.message);
    }
  };
  static DeleteUser = async (req, res) => {
    const _id = req.params.id;
    try {
      const userData = await UserModel.findByIdAndDelete({ _id });
      res.status(200).json({ users: userData, msg: "Success" });
    } catch (error) {
      console.log(error.message);
    }
  };
  static changeUserPassword = async (req, res) => {
    const { password, password_confirmation } = req.body;
    if (password && password_confirmation) {
      if (password !== password_confirmation) {
        res.send({
          status: "failed",
          message: "New Password and Confirm New Password doesn't match",
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        const newHashPassword = await bcrypt.hash(password, salt);
        await UserModel.findByIdAndUpdate(req.user._id, {
          $set: { password: newHashPassword },
        });
        res.send({
          status: "success",
          message: "Password changed succesfully",
        });
      }
    } else {
      res.send({ status: "failed", message: "All Fields are Required" });
    }
  };

  static loggedUser = async (req, res) => {
    res.send({ user: req.user });
  };

  static sendUserPasswordResetEmail = async (req, res) => {
    const { email } = req.body;
    if (email) {
      const user = await UserModel.findOne({ email: email });
      if (user) {
        const secret = user._id + process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ userID: user._id }, secret, {
          expiresIn: "15m",
        });
        const link = `https://www.fitbuzzshop.com/user/reset/${user._id}/${token}`;
        // console.log(link);
        SendEmail(req, res, link, email);
        // res.send({
        //   status: "success",
        //   message: "Password Reset Email Sent... Please Check Your Email",
        // });
      } else {
        res.send({ status: "failed", message: "Email doesn't exists" });
      }
    } else {
      res.send({ status: "failed", message: "Email Field is Required" });
    }
  };

  static userPasswordReset = async (req, res) => {
    const { password, password_confirmation } = req.body;
    const { id, token } = req.params;
    const user = await UserModel.findById(id);
    const new_secret = user._id + process.env.JWT_SECRET_KEY;
    try {
      jwt.verify(token, new_secret);
      if (password && password_confirmation) {
        if (password !== password_confirmation) {
          res.send({
            status: "failed",
            message: "New Password and Confirm New Password doesn't match",
          });
        } else {
          const salt = await bcrypt.genSalt(10);
          const newHashPassword = await bcrypt.hash(password, salt);
          await UserModel.findByIdAndUpdate(user._id, {
            $set: { password: newHashPassword },
          });
          res.send({
            status: "success",
            message: "Password Reset Successfully",
          });
        }
      } else {
        res.send({ status: "failed", message: "All Fields are Required" });
      }
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", message: "Invalid Token" });
    }
  };

  static getUserProfile = async (req, res) => {
    const username = req.params.username;
    try {
      const userData = await UserModel.findOne({ email: username });
      if (userData) {
        res.send(userData);
      } else {
        res.send("invalid user");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  static getUserById = async (req, res) => {
    const id = req.params.id;
    try {
      const userData = await UserModel.findOne({ _id: id });
      if (userData) {
        res.send(userData);
      } else {
        res.send("invalid user");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  static Verify = async (req, res) => {
    const username = req.params.username;
    const { otp } = req.body;
    const getuser = await UserModel.findOne({ email: username });
    if (otp == getuser.otp) {
      res.send({ status: "success", message: "OTP successfully verified" });
    } else {
      res
        .status(403)
        .send({ status: "unauthorized", message: "OTP verification failed" });
    }
  };
  static Resend = async (req, res) => {
    var username = req.params.username;
    try {
      var findUpdate = await UserModel.findOneAndUpdate(
        { email: username },
        { $set: { otp: OTP } }
      );
      if (findUpdate) {
        sendOTP(req, res, username);
      } else {
        res.send({ status: "Not found", message: "User not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  };
}

// export default UserController;
module.exports = UserController;
