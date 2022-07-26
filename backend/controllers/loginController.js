const User = require("../model/User");
const bscrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config();



const loginUser = async (req, res) => {
    const { username, password } = req.body;
    if (!password || !username) return res.status(400).json({ "Message": "Invalid cred" });

    const foundUser = await User.findOne({ username: username })
    if (!foundUser) return res.status(401).json({ "Message": "user not found" });

    // evaluate password
    const match = await bscrypt.compare(password, foundUser.password);
    if (match) {

        // create JWT TOKEN
        const accessToken = jwt.sign(
            {
                "username": foundUser.username,
            },
            process.env.ACCESS_TOKEN,
            {
                expiresIn: "5m"
            }
        );
        const refreshToken = jwt.sign(
            {
                "username": foundUser.username,
            },
            process.env.REFRESH_TOKEN,
            {
                expiresIn: "1d"
            }
        );

        // saving refresh token with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);

        let role = 0;

        if (username == "Walter" || username == "Jesse")
            role = 1;
        res.cookie("jwt", refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000, sameSite: 'None' });//inproduction add secure :true
        res.status(200).json({ "message": "User authorized", "Access Token": accessToken, "Role": role })
    }
    else {
        res.status(401).json({ "message": "Incorrect password" });
    }
}

const allusers = (req, res) => {
    res.status(200).json(User);
}

module.exports = {
    loginUser,
    allusers
}