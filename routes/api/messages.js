const express = require("express");
const router = express.Router();
const body = require("body-parser");
// Message Model
const Message = require("../../models/Message");

// @route GET api/messages
// @desc Get ALl Messages
// @access Public
router.get("/", (req,res) =>{
    Message.find()
        .then(messages => res.json(messages))
        .catch(error => alert("We have an error with getting all messages  "+error));
});

// @route Post api/messages
// @desc Post A Message
// @access Public
router.post("/", (req,res) =>{
    const newMessage = new Message({
        subject: req.body.subject,
        message: req.body.message
        // message: req.body.message
    });
    newMessage.save().then(message => res.json(message)).catch(error => console.log("We have an error in sending a message "+ error));
});

// @route Delete api/messages
// @desc Post A Message
// @access Public
router.delete("/:id", (req,res) =>{
   Message.findById(req.params.id)
       .then(item => item.remove().then(() => res.json({success: true})))
       .catch(() => res.status(404).json({success: false}))
});


module.exports = router;