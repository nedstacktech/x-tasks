require('dotenv').config()
// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
    TWITTER_CONSUMER_KEY: process.env.TWITTER_CLIENT_ID,
    TWITTER_CONSUMER_SECRET: process.env.TWITTER_CLIENT_SECRET,
    TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
    TWITTER_TOKEN_SECRET: process.env.TWITTER_ACCESS_SECRET
  };
  
  const DB_USER = "SOME USER";
  const DB_PASSWORD = "SOME PASSWPORD";
  const MONGODB = {
    MONGODB_URI: `mongodb+srv://josephgreat2003:<password>@cluster0.lciblmw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  };
  
  const SESSION = {
    COOKIE_KEY: "thisappisawesome"
  };
  
  const KEYS = {
    ...TWITTER_TOKENS,
    ...MONGODB,
    ...SESSION
  };
  
  module.exports = KEYS;