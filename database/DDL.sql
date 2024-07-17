-- DROP DATABASE peliculas;
-- DROP TABLE trabajadores;
-- DROP TABLE clientes;

CREATE DATABASE peliculas;

\c peliculas;
CREATE table TRABAJADORES(
  id        SERIAL,
  email     VARCHAR(50)   NOT NULL UNIQUE,
  pass      VARCHAR(50)   NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE peliculas (
  id        SERIAL,
  nombre    VARCHAR(50)   NOT NULL,
  precio    INT           NOT NULL,
  stock     INT           NOT NULL CHECK (stock >= 0)
);

CREATE TABLE clientes (
  id        SERIAL,
  nombre    VARCHAR(50)   NOT NUlL,
  rol       VARCHAR(50)   NOT NUlL,
  salario   INT           NOT NULL
);
