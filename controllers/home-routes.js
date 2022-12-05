const router = require('express').Router();

router.get('/', async (req, res) => {
  //TODO: Find all projects in the database

  //TODO: Serialize the data from sequelize query

  //TODO: Render the homepage handlebars
  
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