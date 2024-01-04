const express = require('express');
const { db } = require('../server/db');

const userRouter = express.Router();

// GET all businesses
userRouter.get('/', async (req, res) => {
  try {
    const allUsers = await db.query(`
      SELECT *
      FROM users;
    `);
    res.status(200).send(allUsers);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET business with matching ID
userRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.query(
      `
      SELECT *
      FROM users
      WHERE id = $1;  
    `,
      [id],
    );
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = userRouter;