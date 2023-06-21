const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, job } = req.body;

  axios
    .post("https://reqres.in/api/users", { name, job })
    .then((response) => {
      const newUser = response.data;

      res.status(201).json(newUser);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to create user" });
    });
});

module.exports = router;
