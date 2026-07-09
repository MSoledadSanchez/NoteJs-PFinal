import express from 'express'; 

const router = express.Router();

import { 
getAllProducts, 
getProductById, 
createProduct, 
updateProduct,
deleteProductId
} from '../controllers/products.controller.js';


router.get('/products', getAllProducts); 

router.get('/products/:id', getProductById); 

router.post('/products/', createProduct); 

router.put('/products/:id', updateProduct); 

router.delete('/products/:id', deleteProductId);


export default router;