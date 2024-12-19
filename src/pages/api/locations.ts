import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";


async function openDB() {
  return open({
    filename: "./src/data/locations.db",
    driver: sqlite3.Database,
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query.q as string;
  console.log("query", query)

  if (!query || query.length < 2) {
    return res.status(400).json({ error: "Query must be at least 2 characters long" });
  }

  const db = await openDB();
  const results = await db.all(
    `SELECT name, latitude, longitude FROM locations WHERE name LIKE ? ORDER BY name ASC LIMIT 20`,
    [`${query}%`]
  );
  
  res.status(200).json(results);
}
