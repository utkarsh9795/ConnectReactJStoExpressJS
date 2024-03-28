import express from 'express';
import StudentControllerr from '../controllers/studentController.js';
const router = express.Router();

router.get('/student', StudentControllerr.getAllDoc)

export default router 