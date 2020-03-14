const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

router.post('/contact', (req, res, next) => {
    Client.register(req.body)
      .then((client) => res.status(201).json({ client }))
      .catch((err) => res.status(500).json({ err }));
  });

module.exports = router;