CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	login VARCHAR,
	password VARCHAR
);

CREATE TABLE IF NOT EXISTS location (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE IF NOT EXISTS nearby (
  id SERIAL PRIMARY KEY,
  current_location_id INTEGER,
  nearby_location_id INTEGER
);

CREATE TABLE IF NOT EXISTS food (
  id SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  added TIMESTAMPTZ DEFAULT now(),
  location_id INTEGER,
  author_id INTEGER
);

CREATE TABLE IF NOT EXISTS category (
  id SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  author_id TEXT
);

CREATE TABLE IF NOT EXISTS foodcat (
  id SERIAL PRIMARY KEY,
  food_id INTEGER,
  cat_id INTEGER
);

CREATE TABLE IF NOT EXISTS fave (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  food_id INTEGER,
  UNIQUE(user_id,food_id)
);
