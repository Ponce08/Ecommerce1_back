import App from './src/server.js';
import sequelize from './src/database.js';

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    // Sincronizar la base de datos
    await sequelize.authenticate();
    console.log('Conexión con la base de datos establecida.');
    await sequelize.sync({ force: true });
    console.log('Modelos sincronizados.');

    App.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

startServer();
