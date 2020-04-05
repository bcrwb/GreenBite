INSERT INTO orders (
  customer_id,
  restaurant_id,
  time_placed,
  time_confirmed,
  time_complete
) VALUES (
  1, 1, '2001-06-07 07:10:09', '1996-11-02 06:06:06', '1888-04-02 02:01:03'
);

INSERT INTO orders (
  customer_id,
  restaurant_id,
  time_placed
) VALUES (
  1, 1, NOW()
), (
  1, 1, NOW()
);

