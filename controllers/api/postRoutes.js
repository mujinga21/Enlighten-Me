const router = require("express").Router();
const { Post } = require("../../models");
// const withAuth = require("../../utils/auth");


//CREATE a post
router.post("/", async (req, res) => {
  

  try {
    const postData = await Post.create({
      title: req.body.title,
      body: req.body.post,
      userId: req.session.user_id,
    });

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//GET a single post


router.get("/:id", async (req, res) => {

 
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//GET all posts

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
