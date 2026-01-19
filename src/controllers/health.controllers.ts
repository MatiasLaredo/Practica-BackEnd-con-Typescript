import type { NextFunction, Request, Response } from "express";
import { uptime } from "node:process";

// Función para la verificación de salud del servidor
 const healthCheck = async (req: Request, res: Response, next: NextFunction) => {
  try {
   if (req.query.error){
    throw new Error('Simulated error for health check');
   }
     res.status(200).json({ 
      status: 'OK', 
      message: 'Health check passed' });
  }
  
    catch (error) {
    next(error);
  }
};

// Nueva función para obtener información del servidor
 const serverInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.query.error){
      throw new Error('Simulated error for server info');
    }
    res.status(200).json({
      uptime: uptime(),
      timestamp: Date.now()
    });
  } catch (error) {
    next(error);
  }
}

// Nueva función para obtener el uso de memoria
const UseMemory = async (req: Request, res: Response) => {
  const memoryUsage = process.memoryUsage();
  try {
    
    res.status(200).json({
      rss: memoryUsage.rss,
      heapTotal: memoryUsage.heapTotal,
      heapUsed: memoryUsage.heapUsed,
      external: memoryUsage.external
    });
  } catch (error) {
    if (req.query.error){
      throw new Error('Simulated error for server info');
    }
    res.status(500).json({error: 'Simulated error'});
  }
}

// Nueva función para obtener el uso de CPU
const CPUUsage = async (req: Request, res: Response) => {
  const cpuUsage = process.cpuUsage();
  try {
    res.status(200).json({
      user: cpuUsage.user,
      system: cpuUsage.system
    });
  } catch (error) {
    if (req.query.error){
      throw new Error('Simulated error for CPU usage');
    }
    res.status(500).json({error: 'Simulated error'});
  }
}
// Ejemplo de función para verificar el estado de la base de datos
/*const DataBaseStatus = async (req: Request, res: Response) => {
  // Aquí iría la lógica para verificar el estado de la base de datos
  const dbConnected = true; 
 if (dbConnected) {
   res.status(200).json({ status: 'Database connected' });
 } else {
   res.status(500).json({ status: 'Database disconnected' });
 }
}*/





const healthController = { healthCheck, serverInfo, UseMemory, CPUUsage, /*DataBaseStatus*/ };

export default healthController;