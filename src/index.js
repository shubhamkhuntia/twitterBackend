import express from "express";
import { connect } from "./config/database.js";
import Tweet from "./models/tweet.js";
const app = express();

app.listen(3000, async () => {
  console.log("server started at 3000");
  connect().then(console.log("MongoDB connected"));

  Tweet.create({
    content: "Hey Shubham",
    likes: 23000,
    noOfRetweets: 187,
    comment: "Woo",
  });
});
