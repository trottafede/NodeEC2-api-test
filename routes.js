const express = require("express");
const router = express.Router();

const Controller = require("./controller/homeController");

router.get("/", Controller.index);       // Muesta el home, lista las cosas (render)

module.exports = router;