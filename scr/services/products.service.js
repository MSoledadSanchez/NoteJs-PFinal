import * as productService from "../models/products.models.js"; 
 

export const getAllProducts = async () => { 
       return productService.getAllProducts();
    }; 
 
export const getProductById = async (id) => { 
      return productService.getProductById(id)  
    }; 
 

export const createProduct = async (productData) => { 
 
    // Valido que el cuerpo no esté vacío
    if (!productData || Object.keys(productData).length === 0) {
        throw new Error("DATOS_VACIOS");
    }

    // Valido campos mínimos obligatorios
    if (!productData.name || !productData.price || !productData.category) {
        throw new Error("CAMPOS_OBLIGATORIOS_FALTANTES");
    }

    try {

        productService.createProduct(productData);
        return productData;

    } catch (error) {
        // Pasamos el error directo al controlador
        throw error;
    }

    };


export const updateProduct = async (productData) => {

    // Valido que el body no esté vacío
    if (!productData || Object.keys(productData).length === 0) {
        throw new Error("DATOS_VACIOS");
    }

    // Valido campos mínimos obligatorios
    if (!productData.name || !productData.price || !productData.category) {
        throw new Error("CAMPOS_OBLIGATORIOS_FALTANTES");
    }

    try {
        productService.saveProduct(productData);
        return productData
    } catch (error) {
        // Pasamos el error directo al controlador
        throw error;
    }
    
} 


export const deleteProductId = async (id) => {

    if (!id) {
            console.error("El ID proporcionado no es válido.");
            //return null;
            throw new Error("ID_INVALIDO");
        }
    
    return productService.deleteProduct(id)
}
