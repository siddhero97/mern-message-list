const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MessageSchema = new Schema({
   subject: {
       type: String,
       required: true
   },
    message: {
       type: String
    },
 date: {
       type: Date,
        default: Date.now()
    }
});

module.exports = Message = mongoose.model('messages', MessageSchema, "messages1");