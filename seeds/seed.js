const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const { post } = require('../controllers');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // for (const post of postData) {
    const posts = await Post.bulkCreate(postData, {
      individualHooks: true,
      returning: true,
    });
  // }

  process.exit(0);
};

seedDatabase();
