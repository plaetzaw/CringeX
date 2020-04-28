const express = require("express")
const router = express.Router();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser")
let SALT = 15
let db = require("../models")

router.use(bodyParser.urlencoded({ extended: false }));

router.post("/register", (req, res)=>{
    let email = req.body.email;
    let handle = req.body.handle;
    let password = req.body.password

    db.user.findOne({
        where: {
            email: email
        }
    })
    .then((user)=>{
        if (user) {
            console.log("email already exists")
        }
        else{
            db.user.findOne({
                where: {
                    handle: handle
                }
            })
            .then((user2)=>{
                if(user2){
                    console.log("handle already exists")
                } else {
                    bcrypt.hash(password, SALT)
                    .then(hash=>{
                        let user = db.user.build({
                            email: email,
                            handle: handle,
                            password: hash
                        })
                        user.save().catch(err=>console.error(err))
                    })
                }
            })
        }
    })
})

module.exports = router