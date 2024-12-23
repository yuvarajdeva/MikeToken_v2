const express = require("express");
const router = express.Router();

const { getBalance, getOwner, getTotalSupply, getSymbol, getName } = require("../controllers/YuvarajController");

router.get('/getOwner', getOwner);
router.get('/getTotalSupply', getTotalSupply);
router.get("/getBalance", getBalance);
router.get("/getName", getName);
router.get("/getSymbol", getSymbol);

module.exports = router;
