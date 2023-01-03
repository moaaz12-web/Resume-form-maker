const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://Mraza143:kattar123@resort.34gxfnk.mongodb.net/?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }
    )
    .then(() => console.log("mongoose connected"))
    .catch((err) => console.log(err));

const db = mongoose.connection;

module.exports = db;