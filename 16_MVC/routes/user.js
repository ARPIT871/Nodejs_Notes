const express = require('express');
const router = express.Router();
const {User}=require('../models/user')

const {getUsername,getUserByID,updatUser,deleteUser,postData} = require('../controllers/user');

// Rouutes

// web Routes
router.route("/")
.get(getUsername )
.post(postData)

// route is used when there are more than one request can be made on same route
router.route("/:id")
    // get request
    .get(getUserByID)
    // patch request
    .patch(updatUser)
    // Delete Request
    .delete(deleteUser)

module.exports =router
