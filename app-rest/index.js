const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const sequelize = new Sequelize('prueba', 'root', 'root1', {
    host: 'mysql',
    dialect: 'mysql',
});

const Persona = sequelize.define('Persona', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    apellidos: {
        type: DataTypes.STRING,
    },
    nombres: {
        type: DataTypes.STRING,
    },
    dni: {
        type: DataTypes.INTEGER,
    },
});

sequelize.sync();
app.use(cors());
app.use(express.json());

app.post('/insertar_con_rest', async (req, res) => {
    try {
        const { apellidos, nombres, dni } = req.body;
        const persona = await Persona.create({ apellidos, nombres, dni });

        res.status(200).json({ message: 'Persona insertada con éxito', persona });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al insertar en la base de datos' });
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
