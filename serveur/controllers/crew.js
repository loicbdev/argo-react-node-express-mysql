const express = require('express');
const router = express.Router();

const connection = require('../database');

// Create and Read
router.get("/", (request, response) => {
  connection.query("SELECT * FROM crew", (err, results) => {
    if(err) {
      response.status(500).send("Error retrieving data");
    } else {
      response.status(200).json(results);
    }
})});

router.post('/', (request, response) => {
  const { name } = request.body;
  connection.query(
    `INSERT INTO crew(name) VALUES (?)`,
    [name],
    (error, result) => {
      if (error) {
        response.status(500).json({
          error: error,
        });
      } else {
        response.status(201).json({
          id: result.insertId,
          ...request.body,
        });
      }
    }
  );
});


module.exports = router;
