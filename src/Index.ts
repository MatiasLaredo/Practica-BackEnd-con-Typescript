import express from 'express';
import healthRoutes from './routes/health.routes';
import morgan from 'morgan';
import logMiddleware from './middleware/log.middleware';
import errorMiddleware from './middleware/error.middleware';

const app = express();
const port = 3000;

//middleware de logging con morgan
app.use(morgan('combined'));

//middleware para leer JSON
app.use(express.json());
app.use(logMiddleware);

//rutas
app.use('/', healthRoutes);

//Middleware para rutas no encontradas
app.use ((_req, res) => {
  res.status(404).json({ status: 'ERROR', message: 'Route not found' });
});

//Middleware de manejo de errores
app.use(errorMiddleware);

//coneccion a la base de datos (si es necesario)
app.get('/db-status', (req, res) => {
  // Aquí iría la lógica para verificar el estado de la base de datos
  const dbConnected = true; // Simulación de estado de conexión
  if (dbConnected) {
    res.status(200).json({ status: 'OK', message: 'Database is connected' });
  }
  else {
    res.status(500).json({ status: 'ERROR', message: 'Database is not connected' });
  }
});

//iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
