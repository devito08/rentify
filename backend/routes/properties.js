// backend/routes/properties.js
const express = require('express');
const mysql = require('mysql');
const router = express.Router();

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'deepak',
  database: 'rentify'
});

// Create Property
router.post('/', async (req, res) => {
  const { place, area, bedrooms, bathrooms, nearbyFacilities, sellerId } = req.body;
  try {
    const sql = 'INSERT INTO properties (place, area, bedrooms, bathrooms, nearbyFacilities, sellerId) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [place, area, bedrooms, bathrooms, nearbyFacilities, sellerId], (err, result) => {
      if (err) throw err;
      console.log('Property created:', result);
      res.status(201).json({ message: 'Property created successfully' });
    });
  } catch (error) {
    res.status(400).json({ error: 'Error creating property' });
  }
});

// Get All Properties
router.get('/', async (req, res) => {
  try {
    const sql = 'SELECT * FROM properties';
    db.query(sql, (err, results) => {
      if (err) throw err;
      console.log('Properties fetched:', results);
      res.json(results);
    });
  } catch (error) {
    res.status(400).json({ error: 'Error fetching properties' });
  }
});

module.exports = router;
