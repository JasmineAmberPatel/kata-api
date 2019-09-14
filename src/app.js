
const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters  } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.json({ result: firstCharacter(req.params.string) });
});

app.get('/strings/first-characters/sd32fg45:string', (req, res) => {
  const string = req.params.string;
  const length = req.query.length;
  res.json({ result: firstCharacters(string, length) });
});

module.exports = app;
