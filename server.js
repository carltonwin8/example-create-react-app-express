#!/usr/bin/env node

const express = require("express");
const { MongoClient } = require("mongodb");
const db = require("./config/db");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  const db = database.db("react1");
  require("./app/routes")(app, db);
  app.listen(port, () => console.log(`Listening on port ${port}`));
});
