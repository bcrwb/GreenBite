DROP TABLE IF EXISTS _items CASCADE;

CREATE TABLE _items (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_id INTEGER REFERENCES menu_categories(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  prep_time SMALLINT,
  cost INTEGER NOT NULL,
  quantity INT
);