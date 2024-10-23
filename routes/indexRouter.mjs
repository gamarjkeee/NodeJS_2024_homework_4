import { Router } from 'express';
import MainController from '../controllers/mainController.mjs';
const router = Router();

router.get('/', MainController.index);

export default router;
