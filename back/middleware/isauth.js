const User = require("../models/user");
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.body.token || req.query.token || req.get("Authorization");

  if (!token) {
    return res.json({error : "Not authentication."});
  }
  try {
    // decoding token
    const decoded = jwt.verify(token, "bectosil");

    // finding user
    const user = await User.findOne({ email: decoded.email });
    // confirming
    if (user && user.token === token) {
      req.user = user;
      next();
    } else {
      return res.json({ error: "Session timeout! Login again please." });
    }
  } catch (error) {
      console.log('auth error: ', error);
    return res.json({ error: "Something happend wrong." });
  }
  // return next();
};

module.exports = verifyToken;
