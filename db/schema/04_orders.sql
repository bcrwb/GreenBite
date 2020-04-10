DROP TABLE IF EXISTS orders CASCADE;

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  item_name VARCHAR(20),
  item_quantity INTEGER NOT NULL,
  item_price INTEGER NOT NULL,
  item_order_id INTEGER REFERENCES users(id),
  time_placed TIMESTAMPTZ NOT NULL,
  time_complete TIMESTAMPTZ
);