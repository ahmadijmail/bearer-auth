'use strict';

const express = require('express');
const authRouter = express.Router();

const basic = require('../middleware/basic.js');
const bearer = require('../middleware/bearer.js');

const {
  handelhome,
  handleSignin,
  handleSignup,
  handleGetUsers,
  handleSecret
} = require('./handlers.js');

authRouter.get('/', handelhome);
authRouter.post('/signup', handleSignup);
authRouter.post('/signin', basic, handleSignin);
authRouter.get('/users', bearer, handleGetUsers);
authRouter.get('/secret', bearer, handleSecret);

module.exports = authRouter;
