const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const jwtAuth = (user, password) => {
  dotenv.config();
  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 600,
    });
    return { auth: true, token: token };
  } else {
    return { auth: false, token: null };
  }
};

function verifyJWT(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).json({ auth: false, message: "No token provided." });

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token." });

    req.userId = decoded.id;
    next();
  });
}

module.exports = { jwtAuth, verifyJWT };
