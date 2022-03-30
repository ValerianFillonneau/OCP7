const db = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = db.users;
const Post = db.posts;
const Op = db.Sequelize.Op;

// Post: /user
exports.create = (req, res) => {
    
    // Validate request
    if (!req.body.password) {
        res.status(400).send({
            message: "vous devez mettre un mot de passe"
        });
        return;
    }
    if (!req.body.email) {
        res.status(400).send({
            message: "vous devez mettre un email"
        });
        return;
    }
    bcrypt.hash(req.body.password, 15)
    .then(hash => {
        const user = {
            email: req.body.email,
            password: hash,
            phone_number: req.body.phone_number,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            role: ""
        };
        return User.create(user)
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the User."
        });
    });
};
// Get: /user/:id
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find User with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving User with id=" + id
        });
    });
};
// Patch: /user/:id
exports.update = (req, res) => {
    const id = req.params.id;
    User.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            return res.status(204);
        } else {
            res.send({
                message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating User with id=" + id
        });
    });
};
// Delete: /user/:id
exports.delete = (req, res) => {
    const id = req.params.id;
    User.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            return res.status(204);
        } else {
            res.send({
                message: `Cannot delete User with id=${id}. Maybe User was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
    });
};
// Get: /user/:id/posts
exports.findAllPosts = (req, res) => {
    const userId = req.params.id
    Post.findAll({ where: {userId: userId} })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving posts."
        });
    });
};
//Post: /user/signin 
exports.login = (req, res, next) => {
    let user;
    User.findOne({email: req.body.email})
    .then(founduser => {
        if (!founduser) {
            return res.status(404).json({error: 'Utilisateur non trouvé !'});
        }
        user = founduser;
        return bcrypt.compare(req.body.password, user.password)
    })
    .then(valid => {
        if (!valid) {
            return res.status(401).json({error: 'Mot de passe incorrect !'})
        }
        res.status(200).json({
            token: jwt.sign(
                {
                    userId: user.id,
                    role: user.role
                },
                'RANDOM_SECRET_TOKEN',
                {expiresIn: '24h'}
            )
        })
    })
    .catch(error => res.status(500).json({error}));
};