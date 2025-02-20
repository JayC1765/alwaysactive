/* eslint-disable linebreak-style */
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.PG_URL,
});

pool.query(`CREATE TABLE IF NOT EXISTS users (
  username VARCHAR PRIMARY KEY,
  password VARCHAR NOT NULL
);`);

pool.query(`CREATE TABLE IF NOT EXISTS events (
  _id serial PRIMARY KEY,
  name VARCHAR NOT NULL,
  city VARCHAR NOT NULL,
  state VARCHAR NOT NULL,
  time TIMESTAMP NOT NULL,
  description VARCHAR NOT NULL,
  username VARCHAR REFERENCES users(username)
  ON DELETE CASCADE
);`);

pool.query(`CREATE TABLE IF NOT EXISTS rsvp (
  _id serial PRIMARY KEY,
  username VARCHAR REFERENCES users(username)
  ON DELETE CASCADE,
  event_id INTEGER REFERENCES events(_id)
  ON DELETE CASCADE
);`);

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
