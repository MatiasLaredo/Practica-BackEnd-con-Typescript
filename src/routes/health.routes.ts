import { Router } from 'express';
import  healthController  from '../controllers/health.controllers';

const router = Router();

router.get('/health', healthController.healthCheck);

router.get('/ping', (req, res) => {
  res.send('pong');
});



router.get('/server-info', healthController.serverInfo);

router.get('/memory-usage', healthController.UseMemory);

router.get('/cpu-usage', healthController.CPUUsage);

router.get('/', (req, res) => {
  res.send('Welcome to the Health Check API');
});

export default router;


