INSERT INTO peliculas (id, nombre, precio, stock) VALUES
  (DEFAULT, 'Los Vengadores', 3500, 30 ),
  (DEFAULT, 'Los 4 Fantasticos', 1200, 12 ),
  (DEFAULT, 'Deadpool', 3200, 30 ),
  (DEFAULT, 'La Matrix', 2387, 12 ),
  (DEFAULT, 'Breaking Bad', 3571, 22 ),
  (DEFAULT, 'Un lugar en silencio', 1900, 19 ),
  (DEFAULT, 'Godzilla vs Kong', 4900, 67 ),
  (DEFAULT, 'The Rookie', 2457, 45 ),
  (DEFAULT, 'South Park', 4500, 35 ),
  (DEFAULT, 'Gigantes de Acero', 1870, 25 );

INSERT INTO trabajadores (id, nombre, rol, salario) VALUES
  (DEFAULT, 'Jose Pablo', 'administrador' , 5000),
  (DEFAULT, 'Luis Cano', 'cajero' , 3500),
  (DEFAULT, 'Alexander Castro', 'administrador' , 2200),
  (DEFAULT, 'Tony Stark', 'conserje' , 7000),
  (DEFAULT, 'Maria Jose', 'cajera' , 6500),
  (DEFAULT, 'Moises Mavo', 'gerente' , 10000),
  (DEFAULT, 'Roxi Torres', 'supervisora' , 4000),
  (DEFAULT, 'Alejandro Peña', 'seguridad' , 3000),
  (DEFAULT, 'Marko Barria', 'seguridad' , 3000);

INSERT INTO clientes (id, email, pass) VALUES 
  (DEFAULT, 'pgp@moisesmavo','22122003');

SELECT * FROM peliculas;
SELECT * FROM personal;
select * from usuarios;