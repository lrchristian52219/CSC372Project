const Database = require('better-sqlite3');
const path = require('path');

// Path to the SQLite database file
const dbPath = path.join(__dirname, 'database.sqlite');

// Initialize the database connection
const db = new Database(dbPath, { verbose: console.log });

module.exports = db;