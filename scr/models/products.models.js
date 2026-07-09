
import { db } from "../config/firebase.js"

import { 
      collection, 
      getDocs, 
      getDoc, 
      addDoc, 
      updateDoc, 
      deleteDoc, 
      doc 
  } from 'firebase/firestore'; 
 
const productsCollection = collection(db, 'product');

// CRUD: Create / Read / Update / Delete

// -------- Método para buscar un producto por su ID 
export async function getProductById(id) { 

    const productDoc = await getDoc(doc(productsCollection, id)); 

    if (productDoc.exists()) { 
        return productDoc.data(); 
    } else { 
        return null; 
    }
  }; 

  
// -------- Método para obtener todos los productos 
export async function getAllProducts() { 

    const querySnapshot = await getDocs(productsCollection); 
    const products = []; 

    querySnapshot.forEach((doc) => { 
        products.push({ id: doc.id, ...doc.data() }); 
    }); 
    return products;

  }; 


// -------- Método para agregar un nuevo producto
export const createProduct = async (productData) => {

    try {
        const productRef = await addDoc(productsCollection,productData)
        
        return {
            id: productRef.id,
            ...productData
        };

    } catch (error) {
        throw error;
    }
};


// -------- Método para actualizar un producto por ID
export const saveProduct = async (productDate) => { 
    
    if (!productDate || !productDate.id) {
        throw new Error('El producto no tiene un ID válido');
    }

    const productRef = await doc(productsCollection, productDate.id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
        
        throw new Error("PRODUCTO_NO_ENCONTRADO");
    }

    try {
        await updateDoc(productRef, productDate);

        return {
            id: productRef.id,
            ...productDate,
        };

     } catch (error) {
        throw error;
    }

}; 

// -------- Método para eliminar un producto por su ID 
export async function deleteProduct(id) { 
   
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    
    if (!snapshot.exists()) {
        throw new Error("PRODUCTO_NO_ENCONTRADO");
    }

    try {
        await deleteDoc(productRef);
        return { id };

    } catch (error) {
        throw error;
    }

};