"use strict";

const { users } = require("../models/index.js");

const bearer = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      next("Invalid Login");
    }

    const token = req.headers.authorization.split(" ").pop();

    const validUser = await users
      .authenticateToken(token)
      .then(async (user) => {
        req.user = user;

        next();
      })
      .catch((e) => {
        res.status(403).send("Invalid Login");
      });
  } catch (e) {
    
    res.status(403).send("Invalid Login");
  }
};

module.exports =bearer