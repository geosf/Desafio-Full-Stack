module.exports = {
  async getAll(req, res) {
    const { token } = req.body;

    return res.json(user);
  },
};
