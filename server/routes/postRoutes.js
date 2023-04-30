const express = require("express");
require("dotenv").config();
const { cloudinary } = require("cloudinary");

const router = express.Router()

router.route("/").get((req,res)=>{
    res.send("Hello Guys, welcome!")
})

module.exports = router
