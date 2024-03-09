const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    userName: { type: String, unique: true },
    twitterId: { type: String, unique: true },
    profileImageUrl: String,
    totalPoints: Number,
    stage: Number,
    engagements: [
      { likes: [{ likeId: String }], retweets: [{ retweetId: String }] },
    ],
  });
  
  const User = mongoose.model("user", userSchema);
  
  module.exports = User;