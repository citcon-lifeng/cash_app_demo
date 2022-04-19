var express = require("express");
var got = require("got");
var uuid = require("uuid").v4;

var router = express.Router();
const charge = require('../controllers/charge');
const webHost = "http://localhost:9088"

router.get("/", function (req, res) {
  res.render("index", {
    title: "cash app demo",
    referenceId: uuid(),
    customerName: "test",
    createPaymentUrl: `${webHost}/charge`,
    successUrl: `${webHost}/success`,
    failUrl: `${webHost}/fail`,
    doneUrl: `${webHost}/done`,
  });
});
router.get("/done", function (req, res) {
  res.render("done", {
    title: "cash app demo",
    createPaymentUrl: `${webHost}/charge`,
    successUrl: `${webHost}/success`,
    failUrl: `${webHost}/fail`,
  });
});
router.get("/success", function (req, res) {
  res.render("success", {
    title: "Successful payment",
  });
});
router.post('/charge', charge.create);

module.exports = router;
