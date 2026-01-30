const express = require("express");
const router = express.Router();
const {getProductDetail} = require("../controllers/detailProductController");

router.get("/:id", getProductDetail);

module.exports= router;