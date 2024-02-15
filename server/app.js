const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pes'
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Signup Route
app.post('/signup', (req, res) => {
  const { name, email, phone_number, password } = req.body;

  // Hashing Password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to hash password' });
    }

    // Insert user into database
    const user = {
      name: name,
      email: email,
      phone_number: phone_number,
      password_hash: hash
    };

    connection.query('INSERT INTO users SET ?', user, (error, results) => {
      if (error) {
        if (error.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ error: 'Email or phone number already exists' });
        }
        return res.status(500).json({ error: 'Failed to create user' });
      }
      res.status(201).json({ message: 'User created successfully' });
    });
  });
});

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM users WHERE email = ?', email, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to fetch user' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = results[0];

    // Compare Password
    bcrypt.compare(password, user.password_hash, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to compare password' });
      }

      if (!result) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      res.status(200).json({ message: 'Login successful' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
