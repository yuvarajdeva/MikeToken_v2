const express = require("express");
const router = express.Router();

const userRoute = require("./userRoute");
const orderRoute = require("./orderRoute");
const paymentRoute = require("./paymentRoute");
const productRoute = require("./productRoute");
const yuvarajapitest = require("./yuvarajapitest");

router.route("/user", userRoute);
router.route("/order", orderRoute);
router.route("/payment", paymentRoute);
router.route("/product", productRoute);
router.use("/yuvarajapitest", yuvarajapitest);

module.exports = router;
