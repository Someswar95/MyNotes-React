const jwt = require("jsonwebtoken");
const { appConstants } = require("../config/AppConstants");

const fetchuser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, appConstants.JWT_SECRET);
    req.user = data;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
