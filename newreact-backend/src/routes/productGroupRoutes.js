const express = require("express");
const router = express.Router();
const {getProductGroups} = require("../controllers/productGroupController");

router.get("/", getProductGroups);

module.exports = router;