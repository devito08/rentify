// backend/routes/users.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const router = express.Router();

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'deepak',
  database: 'rentify'
});

// Register
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, userType } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (firstName, lastName, email, phoneNumber, password, userType) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [firstName, lastName, email, phoneNumber, hashedPassword, userType], (err, result) => {
      if (err) throw err;
      console.log('User registered:', result);
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (error) {
    res.status(400).json({ error: 'Error registering user' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
      if (err) throw err;

      if (results.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
      res.json({ token, user });
    });
  } catch (error) {
    res.status(400).json({ error: 'Error logging in' });
  }
});

module.exports = router;
