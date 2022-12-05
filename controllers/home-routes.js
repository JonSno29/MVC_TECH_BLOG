const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
try {
    const dbPostData = await Post.findAll({
      attributes: ["id", "title", "content", "created_at"],
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "post_id",
            "user_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
  
 const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render("homepage", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  //TODO: If user is already logged in, redirect them to the profile page

  //TODO: Else render the login handlebars

});

router.get('/profile', async (req, res) => {
  //TODO: Find all projects of the logged in user

  //TODO: Serialize the data from sequelize query

  //TODO: Render the profile handlebars

})