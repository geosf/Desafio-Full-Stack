"use strict";

const { query } = require("express");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface
      .createTable("products", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        product_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        brand: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        price: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        category: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        image_url: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      })
      .then(() => {
        queryInterface.bulkInsert("products", [
          {
            product_name: "Nike Air Force 1 Masculino",
            brand: "Nike",
            price: 599.99,
            category: "Shoe",
            image_url: "https://imgnike-a.akamaihd.net/768x768/01113751.jpg",
          },
          {
            product_name: "Nike Court Vision Masculino",
            brand: "Nike",
            price: 549.89,
            category: "Shoe",
            image_url:
              "https://espacotenis.vteximg.com.br/arquivos/ids/167300-1000-1000/tenis-nike.jpg?v=637809950146700000",
          },
          {
            product_name: "Nike Air Force 1 Feminino",
            brand: "Nike",
            price: 599.99,
            category: "Shoe",
            image_url: "https://imgnike-a.akamaihd.net/900x900/02188951.jpg",
          },
          {
            product_name: "Camiseta Nike Dri-Fit Academy Top 21",
            brand: "Nike",
            price: 120.99,
            category: "T-shirt",
            image_url:
              "https://imgcentauro-a.akamaihd.net/900x900/95762105/camiseta-nike-dri-fit-academy-top-21-juvenil-img.jpg",
          },
          {
            product_name: "Adidas Hoopes 2.0 Mid",
            brand: "Adidas",
            price: 349.99,
            category: "Shoe",
            image_url:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e8a7e0461f684425be9ba88d00f07577_9366/Tenis_Hoops_2.0_Mid_Branco_BB7208_01_standard.jpg",
          },
          {
            product_name: "Forum Mid",
            brand: "Adidas",
            price: 699.89,
            category: "Shoe",
            image_url:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c7227d99699243099c24ac5e00406c2c_9366/Tenis_Forum_Mid_Branco_FY4976_01_standard.jpg",
          },
          {
            product_name: "Camiseta Essentials Slim 3-Stripes",
            brand: "Adidas",
            price: 120.99,
            category: "T-shirt",
            image_url:
              "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f30c27b80faf4cde8036af0e011185e5_9366/Camiseta_Essentials_Slim_3-Stripes_Azul_HL2046_21_model.jpg",
          },
          {
            product_name:
              "Tênis Nike Air Force 1 Mid LV8 Next Nature Masculino",
            brand: "Nike",
            price: 120.99,
            category: "Shoe",
            image_url: "https://imgnike-a.akamaihd.net/900x900/0223217T.jpg",
          },
        ]);
      });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
