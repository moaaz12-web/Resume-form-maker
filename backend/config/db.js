const mongoose = require("mongoose");
// mongodb://localhost:27017/Authentication
// mongodb+srv://Mraza143:kattar123@resort.34gxfnk.mongodb.net/?retryWrites=true&w=majority
mongoose

// .connect("mongodb://localhost:27017/Authentication", {
    .connect(
        "mongodb+srv://shayanjamil:kattar123@cluster0.tb83itu.mongodb.net/?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }
    )
    .then(() => console.log("mongoose connected"))
    .catch((err) => console.log(err));

const db = mongoose.connection;

module.exports = db;