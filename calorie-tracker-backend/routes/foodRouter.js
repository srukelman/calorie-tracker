const express = require('express');
const { db } = require('../server/db');

const foodRouter = express.Router();

// GET all foods
foodRouter.get('/', async (req, res) => {
  try {
    const allFoods = await db.query(`
      SELECT *
      FROM foods;
    `);
    res.status(200).send(allFoods);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET foods with matching ID
foodRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const food = await db.query(
      `
      SELECT *
      FROM foods
      WHERE id = $1;  
    `,
      [id],
    );
    res.status(200).send(food);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = foodRouter;