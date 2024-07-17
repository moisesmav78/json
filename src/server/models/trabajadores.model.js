import db from '../database/db_connect.js'

export const findAll = () => db('SELECT * FROM trabajadores;')

export const findById = (id) => db('SELECT * FROM trabajadores WHERE id = $1;', [id])

export const create = ({ nombre, rol, salario }) =>
  db('INSERT INTO trabajadores (id, nombre, rol, salario) VALUES (DEFAULT, $1, $2, $3) RETURNING *;', [nombre, rol, salario])

export const updateById = (id, { nombre, rol, salario }) =>
  db('UPDATE trabajadores SET nombre = $2, rol = $3, salario = $4 WHERE id = $1 RETURNING *;', [id, nombre, rol, salario])

export const deleteById = (id) => db('DELETE FROM trabajadores WHERE id = $1 RETURNING *;', [id])
