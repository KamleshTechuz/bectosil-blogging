const express = require("express");
const route = express.Router();

const isAuth = require('../middleware/isauth')
const authContro = require("../controllers/auth");

route.post("/auth/login", authContro.login);
route.post("/auth/signup", authContro.signup);
route.get("/auth/logout",isAuth, authContro.logout);

module.exports = route;
