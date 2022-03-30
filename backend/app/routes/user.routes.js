const { users } = require("../models/index.js");

module.exports = app => {
    const USERS = require("../controllers/user.controller.js");
    let router = require("express").Router();
    // Create a new Tutorial
    router.post("/", USERS.create);
    router.get("/:id", USERS.findOne);
    router.patch("/:id", USERS.update);
    router.delete("/:id", USERS.delete);
    router.get("/:id/posts", USERS.findAllPosts);
    router.post("/signin", USERS.login);
    app.use('/user', router);
  };