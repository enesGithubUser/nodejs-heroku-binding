const express = require("express");
const router = express.Router();

const DB = require("../data-model");

router.get("/user", (req, res) => {
  DB.findUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((e) => {
      res
        .status(500)
        .json({ errorMessage: "Yazilar yuklenirken hata olustu", error: e });
    });
});

router.get("/post", (req, res) => {
  DB.findPosts()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((e) => {
      res
        .status(500)
        .json({ errorMessage: "Yorumlar yuklenirken hata olustu" });
    });
});

router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  DB.findUserById(id)
    .then((post) => {
      post !== undefined
        ? res.status(200).json(post)
        : res
            .status(500)
            .json({ errorMessage: "Belirtilen ID ile bir yazi bulunamadi." });
    })
    .catch((e) => {
      res
        .status(404)
        .json({ errorMessage: "Yazi yuklenirken hata olustu", error: e });
    });
});

router.get("/post/:id", (req, res) => {
  const { id } = req.params;
  DB.findCommentsByPost(id)
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((e) => {
      res
        .status(500)
        .json({ errorMessage: "Yorum yuklenirken hata olustu", error: e });
    });
});