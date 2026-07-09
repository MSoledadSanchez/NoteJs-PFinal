import {getAllProducts as getAllProductsService, 
        getProductById as getProductByIdService,
        createProduct as createProductService,
        updateProduct as updateProductService,
        deleteProductId as deleteProductIdService
    } from '../services/products.service.js'; 


export const getAllProducts = async (req, res) => { 
    const products = await getAllProductsService();

    res.status(200).json(products); 
  }; 
 

export const getProductById = async (req, res, next) => { 
    const id = req.params.id; 

    try {
        const product = await getProductByIdService(id);

        if (product) { 
            res.status(200).json(product); 
        }

/*     } else { 
        res.status(404).json({ message: 'Producto no encontrado' });  */
     } catch (error) {
        // Atrapa cualquier error de negocio (Servicio) o técnico (Modelo/Firebase)
        next(error);
    }


  }; 
 

export const createProduct = async (req, res, next) => { 
   
    const productData = req.body;
    
    try {
        const result = await createProductService(productData);
        
        return res.status(201).json({ 
            ok: true, 
            message: "Producto ingresado.", 
            data: result 
        });
    } catch (error) {
        // Atrapa cualquier error de negocio (Servicio) o técnico (Modelo/Firebase)
        next(error);
    }

  }; 


export const updateProduct = async (req, res, next) => {
    
    const id = req.params.id; 
    const { name, category, price } = req.body; 

    try {

        const result = await updateProductService(
                            {id, name, category, price });

        return res.status(201).json({
            ok: true, 
            message: "Producto actualizado.", 
            data: result 
        }); 

    } catch (error) {
        // Atrapa cualquier error de negocio (Servicio) o técnico (Modelo/Firebase)
        next(error);
    }
}

export const deleteProductId = async (req, res, next) => {
    const id = req.params.id; 

    try {
        const result = await deleteProductIdService(id);

        return res.status(200).json({ ok: true, message: "Producto eliminado", data: result });

    } catch (error) {
        // Pasa el error al middleware global
        next(error); 
    }

  }