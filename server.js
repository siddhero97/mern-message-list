const express = require("express");
const mongoose = require("mongoose");
const body = require("body-parser");
const path = require("path");
const messages = require("./routes/api/messages");
const app = express();

//Bodyparser Middleware
app.use(body.json());
// MongoDB uri
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose.connect(db, {useUnifiedTopology: true ,  useNewUrlParser: true})
    .then(() => console.log("MongoDB Connected ..."))
    .catch(err => console.log(err));

const port = process.env.PORT  || 5000;

try
{
    app.use('/api/messages', messages);
    if(process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
        app.get("*",(req,res) => {
            res.sendFile(path.resolve(__dirname, "client","build","index.html"));
        });
    }
    app.listen(port, () => console.log("Server started on port ${port}"));
}catch (e) {
    console.log("error ", e);
}
// Use Routes


