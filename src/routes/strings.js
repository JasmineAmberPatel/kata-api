const express = require('express');
const router = express.Router();
const { app } = require('./src/app.js');

router.get('/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});
module.exports = router;
