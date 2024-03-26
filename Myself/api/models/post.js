const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  content: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;