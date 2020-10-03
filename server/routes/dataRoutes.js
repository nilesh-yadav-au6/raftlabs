const express = require('express')
const router = express.Router()

const { addUser ,addRelation , findDegree ,getUsers ,getallRelation} = require("../controllers/dataControllers")

router.post("/add/user" , addUser)
router.post("/user/relation" , addRelation)
router.post("/find/degree" ,findDegree)
router.get("/get/users" ,getUsers)
router.get("/all/relations" , getallRelation)

module.exports = router