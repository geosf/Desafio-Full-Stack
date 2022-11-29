const express = require("express");
const ProductController = require("./src/controllers/ProductController");
const UserController = require("./src/controllers/UserController");
const { verifyJWT } = require("./src/services/auth");

const routes = express.Router();

routes.post("/sign-up", UserController.store);

routes.post("/sign-in", UserController.signIn);

routes.post("/sign-out", UserController.signOut);

routes.get("/home", verifyJWT, ProductController.getAll);

routes.get("/", ProductController.getHelloWorld);

module.exports = routes;
