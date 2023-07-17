const qs = require("qs");
const utils = require("./utils");

//encrypt request
exports.ccav_request_handler = async function (req, res) {
  const {
    merchant_id = "000", // your merchant id provided by bank
    order_id = Date.now(), // uniuqe order_no
    currency = "USD", // or any supported currency
    amount,
    redirect_url = "https://your_domain.com/ccavResponseHandler", // any route name that where ccaveneue response hit back to sever
    cancel_url = "https://your_domain.com/ccavResponseHandler", //any route name that where ccaveneue response hit back to sever
    merchant_param1, // extra information can be send in these params you are not allowed to use any other custom field
    merchant_param2,
    merchant_param3,
    merchant_param4,
    merchant_param5,
    promo_code,
    customer_identifier, // to save card info on payment gateway side
  } = req.body;

  const stringify_payload = qs.stringify({
    ...req.body,
  });

  const encryptionResponseData =
    utils.node_encrypt_ccavenue_request(stringify_payload);

  res.render("payment_request", {
    encryptedData: encryptionResponseData,
    access_code: "XXXXXX", // your access_code provided by bank
  });
};

// handle request from bank
exports.ccav_response_handler = async function (req, res) {
  const { encResp } = req.body;
  /* decrypt */
  let decryptedJsonResponseData;
  decryptedJsonResponseData = utils.node_dencrypt_ccavenue_response(encResp);
  let data = decryptedJsonResponseData;

  const {
    merchant_param1,
    merchant_param2,
    merchant_param6,
    merchant_param3,
    merchant_param4,
    order_status,
    failure_message,
    status_code,
    status_message,
    amount,
    tracking_id,
    payment_mode,
    card_name,
    customer_card_id,
  } = data || {};

  if (
    order_status == "Invalid" ||
    order_status == "Aborted" ||
    order_status == "Cancelled" ||
    order_status == "Unsuccessful" ||
    order_status == "Failure"
  ) {
    // return response
    return res.render("ccav_payment_response", {
      data_string: JSON.stringify(data),
      order_status,
    });
  }

  // write your logic here...

  // and return response
  return res.render("ccav_payment_response", {
    data_string: JSON.stringify(data),
    order_status,
  });
};
