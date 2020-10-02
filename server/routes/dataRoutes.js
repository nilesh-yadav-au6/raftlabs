const express = require('express')
const router = express.Router()

const { addUser ,addRelation , findDegree ,getUsers} = require("../controllers/dataControllers")

router.post("/add/user" , addUser)
router.post("/user/relation" , addRelation)
router.post("/find/degree" ,findDegree)
router.get("/get/users" ,getUsers)

module.exports = router