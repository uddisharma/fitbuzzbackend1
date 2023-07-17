const OrderModel = require("../models/order.js");
const nodemailer = require("nodemailer");
// import Mailgen from "mailgen";
const Mailgen = require("mailgen");
class orderController {
  static SendOrders = async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        alternatephone,
        state,
        district,
        city,
        zipcode,
        address,
        order,
        paymentmethod,
        // payment,
        amount,
        orderDate,
        deliveryDate,
        status,
        paymentID,
        orderID,
        shipmentID,
      } = req.body;
      // console.log(req.body)
      const orderdetails = new OrderModel({
        name: name,
        email: email,
        phone: phone,
        alternatephone: alternatephone,
        state: state,
        district: district,
        city: city,
        zipcode: zipcode,
        address: address,
        order: order,
        paymentmethod: paymentmethod,
        amount: amount,
        orderDate: orderDate,
        deliveryDate: deliveryDate,
        status: status,
        paymentID: paymentID,
        orderID: orderID,
        shipmentID: shipmentID,
      });
      // console.log(orderdetails);
      await orderdetails.save();
      // res.status(200).json({
      //   msg: "order confirmed ",
      // });
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
          name: "Fitbuzz Wellness",
          link: "https://mailgen.js/",
        },
      });
      // let response = {
      //   body: {
      //     name: name,
      //     intro: "Order Confimed",
      //     table: {
      //       data: [
      //         {
      //           description:
      //             "Your order has been confirmed. Here is your order id is" +
      //             " " +
      //             orderdetails.orderID +
      //             " " +
      //             "Now you can track your order with this id or you can check status in your profile / your orders",
      //         },
      //       ],
      //     },
      //     outro: "Thanks from Fitbuzz Shop",
      //   },
      // };
      // let mail = maingenerator.generate(response);
      let message = {
        from: "uddibhardwaj08@gmail.com",
        to: email,
        subject: "Order Confirmation",
        // html:mail
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
                                      Hi ${name}
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
                                      Thank you for choosing to shop with us at
                                      <span style="color: green">fitbuzzshop.com</span>
                                      We are pleased to inform you that your order has
                                      been successfully placed and is now confirmed. We
                                      appreciate your trust in our products and
                                      services.
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
                                        display: block !important;
                                        text-align: left !important;
                                      "
                                    >
                                      Order Details :
                                      <br />
                                      Order ID : ${orderID}
                                      <br />
                                      order Date :${orderDate}
                                      <br />
                                      Shipping Address : ${address} ${city} ${district}
                                      (${zipcode}) ${state} India
                                      <br />
                                      <br />
                                      Payment Details:
                                      <br />
                                      Payment Method: ${paymentmethod} <br />
                                      Total Amount: ${amount}
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
                                                display: block;
                                                text-align: left;
                                              "
                                            >
                                              Please ensure that the payment is made
                                              promptly to avoid any delays in processing
                                              your order.
        
                                              <br />
                                              <br>
                                              <span style="color: green;">Customer Support</span>
                                              
                                              <br />
                                              <br>
                                              If you have any questions, concerns, or
                                              need further assistance regarding your
                                              order, our dedicated customer support team
                                              is here to help. You can reach us by
                                              replying to this email or contacting our
                                              customer service helpline at [Insert
                                              Customer Support Contact Details]. Thank
                                              you again for choosing to shop with us. We
                                              look forward to serving you and providing
                                              you with an exceptional shopping
                                              experience.
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
                                                display: block;
                                                text-align: left;
                                              "
                                            >
                                            Best regards,
                                            <br>
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
        >
        `,
      };
      transporter.sendMail(message).then(() => {
        return res.status(200).json({
          msg: "Email has been sent successfully",
        });
      });
    } catch (error) {
      return res.status(500).json({
        msg: error,
        data: req.body,
      });
    }
    // const {
    //   name,
    //   email,
    //   phone,
    //   alternatephone,
    //   state,
    //   district,
    //   city,
    //   zipcode,
    //   address,
    //   order,
    //   paymentmethod,
    //   payment,
    //   amount,
    // } = req.body;
    // if (
    //   name &&
    //   email &&
    //   phone &&
    //   alternatephone &&
    //   state &&
    //   district &&
    //   city &&
    //   zipcode &&
    //   address &&
    //   order &&
    //   paymentmethod &&
    //   payment &&
    //   amount
    // ) {
    //   const orderdetails = new OrderModel({
    //     name: name,
    //     email: email,
    //     phone: phone,
    //     alternatephone: alternatephone,
    //     state: state,
    //     district: district,
    //     city: city,
    //     zipcode: zipcode,
    //     address: address,
    //     order: order,
    //     paymentmethod: paymentmethod,
    //     payment: payment,
    //     amount: amount,
    //   });
    //   await orderdetails.save();
    //   res.send(orderdetails);
    //   let config = {
    //     service: "gmail",
    //     auth: {
    //       user: process.env.USER,
    //       pass: process.env.PASS,
    //     },
    //   };
    //   let transporter = nodemailer.createTransport(config);
    //   let maingenerator = new Mailgen({
    //     theme: "default",
    //     product: {
    //       name: "Fitbuzz Wellness",
    //       link: "https://mailgen.js/",
    //     },
    //   });
    //   let response = {
    //     body: {
    //       name: name,
    //       intro: "Order Confimed",
    //       table: {
    //         data: [
    //           {
    //             description:
    //               "Your order has been confirmed. Here is your order id is" +
    //               " " +

    //               " " +
    //               "Now you can track your order with this id or you can check status in your profile / your orders",
    //           },
    //         ],
    //       },
    //       outro: "Thanks from Fitbuzz Shop",
    //     },
    //   };
    //   let mail = maingenerator.generate(response);
    //   let message = {
    //     from: "uddibhardwaj08@gmail.com",
    //     to: email,
    //     subject: "your order has been confirmed",
    //     html: mail,
    //   };
    //   transporter.sendMail(message).then(() => {
    //     return res.status(200).json({
    //       msg: "Email has been sent successfully",
    //     });
    //   });
    // } else {
    //   res.send("All fields are required");
    // }
  };
  static GetOrders = async (req, res) => {
    try {
      const data = await OrderModel.find()
        .sort("OrderDate")
        .then((orders) => {
          res.status(200).send(orders);
          // console.log(orders.user.order);
        });
    } catch (error) {
      res.status(400).send(error.message || error);
    }
  };
  static UserOrders = async (req, res) => {
    const email = req.params.email;
    try {
      const data = await OrderModel.find({ email }).then((orders) => {
        res.status(200).send(orders);
        // console.log(orders.user.order);
      });
    } catch (error) {
      res.status(400).send(error.message || error);
    }
  };
  static OrderbyId = async (req, res) => {
    const _id = req.params.id;
    try {
      const data = await OrderModel.findById({ _id }).then((orders) => {
        res.status(200).send(orders);
        // console.log(orders.user.order);
      });
    } catch (error) {
      res.status(400).send(error.message || error);
    }
  };
  static UpdateOrder = async (req, res) => {
    try {
      const _id = req.params.id;

      const status = req.body.status;

      const data = await OrderModel.findByIdAndUpdate(_id, {
        $set: {
          status: status,
        },
      }).then((orders) => {
        res.status(200).send(orders);
        // console.log(orders.user.order);
      });
    } catch (error) {
      res.status(400).send(error.message || error);
    }
  };
  static DeleteOrder = async (req, res) => {
    const _id = req.params.id;
    try {
      const data = OrderModel.findByIdAndDelete({ _id })
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((error) => {
          res.status(400).send(error.message || error);
        });
    } catch (error) {
      res.state(400).send(error.message || error);
    }
  };
  static updateStatus = async (req, res) => {
    const _id = req.params.id;
    const status = req.body.status;
    try {
      const data = await OrderModel.findByIdAndUpdate(_id, {
        $set: {
          status: status,
        },
      }).then((orders) => {
        res.status(200).send(orders);
        // console.log(orders.user.order);
      });
    } catch (error) {
      res.status(400).send(error.message || error);
    }
  };
}
module.exports = orderController;
