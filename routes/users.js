/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { queryInfoByUserId, queryInfoByWebTypeAndUserId } = require('../helper/queries');


module.exports = (db) => {
  // router.get("/", (req, res) => {
  //   db.query(`SELECT * FROM users;`)
  //     .then(data => {
  //       const users = data.rows;
  //       res.json({ users });
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  // });

  router.get('/login', (req, res) => {
    res.render('login');
  })

  router.post('/login', (req, res) => {

    res.send(JSON.stringify(req.body));
  })

  router.get('/signup', (req, res) => {
    res.render('signup');
  })

  router.post('/signup', (req, res) => {
    res.send(JSON.stringify(req.body));
  })

  router.post('/logout', (req, res) => {

  })

  router.get('/main', async (req, res) => {
    try {
      const result = await queryInfoByUserId(2);
      res.send(result);
    } catch (error) {
      
      throw error['message'];
    }
    // res.render('main');
  })






  return router;
};
