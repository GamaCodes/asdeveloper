const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

router.post('/contact', async (req, res, next) => {
  const { name, email, phone, reason, message } = req.body;
  await Client.create({ name, email, phone, reason, message });
  res.status(201).json({ message: "Mensaje enviado" });
  })

module.exports = router;
