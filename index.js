import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import productsRouter from "./scr/routes/products.routes.js" 
import authRouter from "./scr/routes/auth.routes.js"
import { errorHandler } from "./scr/middlewares/errorHandler.js";
import { authentication } from "./scr/middlewares/authentication.js";


const app = express();

const PORT = process.env.PORT || 3001;

const corsOptions = {
  // Dominios permitidos - URL de tu frontend
  origin: `http://localhost:${PORT}`,  
  // Métodos HTTP permitidos 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
};

app.use(cors(corsOptions));

app.use(express.json()); 

app.listen (PORT, () => {console.log(`Servicdor ejecutando en http://localhost:${PORT}`)});

app.use('/auth', authRouter);

app.use('/api', authentication, productsRouter);


// Middleware para manejar errores 404 
app.use(errorHandler); 

// Middleware para manejar errores 404 
/* app.use((req, res, next) => { 
  res.status(404).send('Recurso no encontrado o ruta inválida'); 
}); */