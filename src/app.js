
const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply, divide, power, round, roundUp, roundDown, absolute, quotient } = require('./lib/numbers');
const app = express();
app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-character/:string', (req, res) => {
  res.json({ result: firstCharacter(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const string = req.params.string;
  const length = req.query.length;
  res.json({ result: firstCharacters(string, length) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const isNumeric = (string) => {
    return !Number.isNaN(parseInt(string));
  };
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.status(200).json({ result: add(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const isNumeric = (string) => {
    return !Number.isNaN(parseInt(string));
  };
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.status(200).json({ result: subtract(b, a) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const isNumeric = (string) => {
    return !Number.isNaN(parseInt(string));
  };
  if (isNumeric(req.body.a) && isNumeric(req.body.b)) {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  } else
  if (isNaN(req.body.a) && isNumeric(req.body.b)) {
    res.status(400).json({ error: 'Parameters \"a\" is required.' });
  } else
  if (isNumeric(req.body.a) && isNaN(req.body.b)) {
    res.status(400).json({ error: 'Parameters \"b\" is required.' });
  } else
  if (isNaN(req.body.a) && isNaN(req.body.b)) {
    res.status(400).json({ error: 'Parameters \"a\" and \"b\" are required.' });
  }
});

app.post('/numbers/divide', (req, res) => {
  res.status(200).json({ result: divide(req.body.a, req.body.b) });
});

module.exports = app;
