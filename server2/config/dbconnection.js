
const mongoose = require('mongoose');
const keys = require("./keys")
let dbConnection;
const connectDB = () => {

    try {
      mongoose.connect(keys.MongoDB.url);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
    dbConnection = mongoose.connection;
    dbConnection.once("open", (_) => {
      console.log(`Database connected: ${keys.MongoDB.url}`);
    });
   
    dbConnection.on("error", (err) => {
      console.error(`connection error: ${err}`);
    });
    return;   
}

module.exports = {connectDB, dbConnection}