DROP TABLE IF EXISTS taxes CASCADE;

CREATE TABLE tax (
  province VARCHAR(2) PRIMARY KEY NOT NULL,
  tax INT NOT NULL
);