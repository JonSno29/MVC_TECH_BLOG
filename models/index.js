const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// USER
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// POST
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

// COMMENT
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Post, Comment };
