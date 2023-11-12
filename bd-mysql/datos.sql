-- Crear la base de datos "prueba"
CREATE DATABASE IF NOT EXISTS prueba;

-- Usar la base de datos "prueba"
USE prueba;

-- Crear la tabla "personas"
CREATE TABLE IF NOT EXISTS personas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    apellidos VARCHAR(200),
    nombres VARCHAR(200),
    dni INT(11)
);

-- Insertar registros de ejemplo en la tabla "personas"
INSERT INTO personas (apellidos, nombres, dni) VALUES
    ('García', 'Juan', 345678901),
    ('López', 'María', 456789012),
    ('Martínez', 'Carlos', 367890123);
