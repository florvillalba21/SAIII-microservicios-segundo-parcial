const express = require('express');
const app = express();
const soap = require('soap');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');

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

app.use(cors());

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
    await sequelize.sync();
    console.log('Modelos sincronizados con la base de datos.');

    app.listen(8888, () => {
      console.log('Servidor SOAP escuchando en el puerto 4000');
    });

    const xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

    const soapService = {
      ConsultarPersonasService: {
        ConsultarPersonasPort: {
          consultarPersonas: async function (args) {
            try {
              console.log('Consultando personas...');
              const personas = await Persona.findAll();

              const personasArray = personas.map((persona) => ({
                id: persona.id,
                apellidos: persona.apellidos,
                nombres: persona.nombres,
                dni: persona.dni,
              }));

              console.log('Consulta exitosa:', personasArray);

              return { personas: personasArray };
            } catch (error) {
              console.error('Error en la operación SOAP:', error.message);
              return {
                resultado: 'Error en la operación SOAP',
                personas: [],
                error: error.message,
              };
            }
          },
        },
      },
    };

    soap.listen(app, '/consultar_con_soap', soapService, xml);
    console.log('Servicio SOAP configurado correctamente.');
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error.message);
  }
})();
