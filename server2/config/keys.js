require("dotenv").config();

const PORT = process.env.PORT;
const BaseUrl = process.env.BASE_URL;
const AuthKeys = {
    clientID: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET,
}
const MongoDB = {
    url: process.env.MONGODB_URL
}

module.exports = {PORT, BaseUrl, AuthKeys, MongoDB}