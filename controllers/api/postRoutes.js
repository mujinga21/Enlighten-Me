const router = require("express").Router();
const { Post } = require("../../models");
// const withAuth = require("../../utils/auth");

router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  console.log("hello world");
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

router.get('/', async (req, res) => {
  console.log("hello world");
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

router.put('/:post_id', (req, res) => {
  Post.update(
    {
      title: req.body.title,
      body: req.body.body,
    },
    {
      where: {
        id: req.params.post_id,
      },
    }
  )
    .then((updatedPost) => {
      res.json(updatedPost);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
