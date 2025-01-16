import app, { allowedOrigins } from './src/server.js';
import sequelize from './src/database.js';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './src/graphql/index.js';

const PORT = process.env.PORT || 4000;

// Configuracion Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  try {
    // inicio servidor de Apolo
    await server.start();
    // Aplicar Apollo Server al middleware con soporte para CORS
    server.applyMiddleware({
      app,
      cors: {
        origin: allowedOrigins // Lista de dominios permitidos
      }
    });

    // Sincronizar la base de datos
    await sequelize.authenticate();
    console.log('Conexión con la base de datos establecida.');
    await sequelize.sync({ force: false });
    console.log('Modelos sincronizados.');

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

startServer();
