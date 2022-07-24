const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const corsOption = require("./config/corsOption");
const connectDB = require("./config/dbConnect");

const PORT = process.env.PORT || 3500;
const app = express();

// connect to mongo
connectDB();

app.use(cors(corsOption));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());


// apis
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));


mongoose.connection.once("open", () => {
    console.log("connected db");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
