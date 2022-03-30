const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//define all tables
db.users = require("./user.model.js")(sequelize, Sequelize);
db.categorys = require("./category.model.js")(sequelize, Sequelize);
db.posts = require("./post.model.js")(sequelize, Sequelize);
db.comments = require("./comment.model.js")(sequelize, Sequelize);
//belongsto table
db.posts.belongsTo(db.users);
db.posts.belongsTo(db.categorys);
db.comments.belongsTo(db.users);
db.comments.belongsTo(db.posts);
db.categorys.belongsTo(db.users);
module.exports = db;