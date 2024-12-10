# Hints

## Challenge 1: Questions

Depending on experience you might want to run the scripts and debug the statements to give a confident answer.

## Challenge 2: The geo search server

Loading data:

SQLite has tools for loading data into a database automatically. The data is provided as a Tab Separated Variables (.tsv).

From the sqlite prompt (run `sqlite3` in your terminal):

```sh
sqlite> .open ./data/database.db
sqlite> .mode tabs
sqlite> .import ./data/GB.tsv locations
```

Building the server:

Feel free to include modules to help you with this challenge. A good set might be:

- [sqlite](https://www.npmjs.com/package/sqlite3)

There is a starter `package.json` and `index.js` to build your app

## Challenge 3: The search form

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.
