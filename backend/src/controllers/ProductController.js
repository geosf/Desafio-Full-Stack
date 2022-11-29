module.exports = {
  async getAll(req, res) {
    try {
      const products = require("../../products.json");
      console.log(products);
      res.statusCode = 200;
      return res.json({
        products: products.products,
      });
    } catch {
      res.statusCode = 404;
      return res.json({
        message: "Products not found!",
      });
    }
  },

  async getHelloWorld(req, res) {
    return res.json({
      message: "hello world",
    });
  },
};
