const express = require("express")
const router = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser")
let SALT = 15
let db = require("../models")

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/createUser", (req, res)=>{
    let email = req.body.email;
    let handle = req.body.handle;

    db.users.findOne({
        where: {
            email: email
        }
    })
    .then((user)=>{
        if (user) {
            console.log("email already exists")
        }
        else{
            db.users.findOne({
                where: {
                    handle: handle
                }
            })
        }
    })
})