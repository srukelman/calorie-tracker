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

// POST new food
foodRouter.post('/', async (req, res) => {
  try {
    const {
      item_name : itemName,
      serving_size : servingSize,
      serving_size_type : servingSizeType,
      total_calories: totalCalories,
      fat,
      carbs,
      protein
    } = req.body;

    await db.query(
      `
        INSERT INTO foods (item_name, serving_size, serving_size_type, total_calories, fat, carbs, protein)
        VALUES
        ($(itemName), $(servingSize), $(servingSizeType), $(totalCalories), $(fat), $(carbs), $(protein));
      `,
      { itemName, servingSize, servingSizeType, totalCalories, fat, carbs, protein },
    );
  } catch (err) {
    res.status(500).send(err.message);
  }
});


// PUT (update) food with matching ID
foodRouter.put('/:id', async (req, res) => {
  const { id } = req.params;

  try{
    const fields = req.body;

    let query = 'UPDATE foods SET ';
    const updateFields = [];
    for (const [key, value] of Object.entries(fields)) {
      if (value != null) {
        updateFields.push(`${camelToSnakeCase(key)} = '${value}'`);
      }
    }
    query += updateFields.join(', ');
    query += ` WHERE id = ${id}`;

    await db.query(query);
  } catch (err){
    res.status(500).send(err.message);
  }
});

// DELETE food with matching ID
foodRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.query(
      `
      DELETE FROM foods
      WHERE id = $1;
    `,
      [id],
    );
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = foodRouter;