const express = require("express");
const route = express.Router();

const isAuth = require("../middleware/isauth");
const blogContro = require("../controllers/blog");

route.post("/auth/create-blog", isAuth, blogContro.createBlog);
route.get("/auth/all-blogs",isAuth, blogContro.getBlogs);
route.get("/auth/my-blogs",isAuth, blogContro.getMyBlogs);

module.exports = route;
