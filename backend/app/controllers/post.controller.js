const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;
// Post: /post
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Le titre ne doit pas être vide !"
        });
        return;
    }
    // Create a Tutorial
    const post = {
        title: req.body.title,
        text: req.body.text
    };
    // Save Tutorial in the database
    Post.create(post)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Tutorial."
        });
    });
};
// Get: /post/:id
exports.findOne = (req, res) => {
    
};
// Patch: /post/:id
exports.update = (req, res) => {
    
};
// Delete: /post/:id
exports.delete = (req, res) => {
    
};
// Get: /post/:id/comments
exports.findAllComments = (req, res) => {
    
};