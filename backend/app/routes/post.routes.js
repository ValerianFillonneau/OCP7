const { posts } = require("../models/index.js");

module.exports = app => {
    const POSTS = require("../controllers/post.controller.js");
    let router = require("express").Router();
    // Create a new Tutorial
    router.post("/", POSTS.create);
    router.patch("/:id", POSTS.update);
    router.delete("/:id", POSTS.delete);
    router.get("/:id", POSTS.findOne);
    router.post("/:id/comments", POSTS.findAllComments);
    app.use('/api/posts', router);
  };