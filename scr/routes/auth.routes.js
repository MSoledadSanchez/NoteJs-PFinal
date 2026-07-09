import express from 'express'; 

import { login } from  "../controllers/auth.controller.js";


const router = express.Router();

router.post('/login', login);

/* router.post('/auth/login', (req, res) => {
    res.send('Autorizar el login'); 
  });  */

export default router;
