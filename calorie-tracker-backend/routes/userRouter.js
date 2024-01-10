const express = require('express');
const { db } = require('../server/db');

const userRouter = express.Router();

// GET all users
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

// GET user with matching ID
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

// POST new user
userRouter.post('/', async (req, res) => {
  try {
    const {
      user_name : userName,
      password,
      email,
      first_name : firstName,
      last_name : lastName,
      age,
      weight,
    } = req.body;

    await db.query(
      `
        INSERT INTO users (user_name, password, email, first_name, last_name, age, weight)
        VALUES
        ($(userName), $(password), $(email), $(firstName), $(lastName), $(age), $(weight));
      `,
      { userName, password, email, firstName, lastName, age, weight },
    );
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// PUT user with matching ID
userRouter.put('/:id', async (req, res) => {
  try {
    const {
      user_name : userName,
      password,
      email,
      first_name : firstName,
      last_name : lastName,
      age,
      weight,
    } = req.body;

    const { id } = req.params;

    await db.query(
      `
      INSERT INTO users SET
      ${id ? 'id = $(id),' : ''}
      ${userName ? 'user_name = $(userName),' : ''}
      ${password ? 'password = $(password),' : ''}
      ${email ? 'email = $(email),' : ''}
      ${firstName ? 'first_name = $(firstName),' : ''}
      ${lastName ? 'last_name = $(lastName),' : ''}
      ${age ? 'age = $(age),' : ''}
      ${weight ? 'weight = $(weight),' : ''}
      WHERE id = $(id);
      RETURNING *;
      `,
      { id, userName, password, email, firstName, lastName, age, weight },
    );
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = userRouter;