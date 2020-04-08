/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const twilio = require('twilio')

module.exports = (db) => {
  router.post("/", (req, res) => {
    db.query(`INSERT INTO users (user_token,first_name,last_name,email,password,phone_number)
    VALUES (123,'brent','carey','brent@bren.com','password','6476690083') RETURNING *;`)
      .then(data => {
        const users = data.rows;
        res.render('../views/orderSummary', {
          users
        });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};

