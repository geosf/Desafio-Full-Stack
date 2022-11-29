const User = require("../models/User");
const { jwtAuth } = require("../services/auth");
const bcrypt = require("bcryptjs");

module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, 8),
    });

    return res.json(user);
  },

  async signIn(req, res) {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const user = await User.findOne({ where: { email } });
    if (user) {
      const userAuth = jwtAuth(user, password);
      if (userAuth.auth) {
        return res.json({
          user: user,
          token: userAuth.token,
        });
      } else {
        res.statusCode = 500;
        return res.json({
          message: "Wrong password!",
        });
      }
    } else {
      res.statusCode = 404;
      return res.json({
        message: "Email not found!",
      });
    }
  },

  async signOut(req, res) {
    res.json({
      auth: false,
      token: null,
    });
  },
};
