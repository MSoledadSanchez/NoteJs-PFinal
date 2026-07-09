import jwt from 'jsonwebtoken'; 
import 'dotenv/config'; 

const secret_key = process.env.JWT_SECRET_KEY; 

// Middleware para verificar el token JWT 
export const authentication = (req, res, next) => { 

    const token = req.headers['authorization'].split(" ")[1]; 
    
    if (!token) throw new Error("CREDENCIALES NO VALIDAS"); 
        
    jwt.verify(token, secret_key, (err) => { 
        if (err) throw new Error("NO TIENE PERMISOS"); 
        next(); 
    });
};


