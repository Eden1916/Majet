const express = require("express");
const router = express.Router();
const {getProductDetail} = require("../controllers/detailProductController");

router.get("/group/:product_group", getProductDetail);

module.exports = router;