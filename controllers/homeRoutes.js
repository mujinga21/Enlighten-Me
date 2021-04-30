const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("login");
});

// If user is logged in, redirect to homepage, otherwise render login
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }

  res.render("login");
});

// router.get("/homepage", (req, res) => {
//   res.render("homepage"),
// });

router.get("/homepage", (req, res) => {
  try {
    res.render("homepage", {
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/user", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Post,
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("profile", {
      ...user,
      posts,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
