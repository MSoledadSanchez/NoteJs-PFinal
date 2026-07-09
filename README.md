# 📝 NoteJs-PFinal / api-rest-node-js-products

API REST desarrollada con Node.js y Express para la gestión integral de un catálogo de productos (CRUD), utilizando Firebase como base de datos.

## 🚀 Tecnologías Utilizadas

* **Node.js** - Entorno de ejecución
* **Express** - Framework web
* **Firebase** - Base de datos

## 🛠️ Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:
* **Node.js** (Versión 18 o superior)
* **npm**
* **Git**
* Una cuenta en **Firebase** 

## ⚙️ Configuración

1. **Configura las credenciales de Firebase:**
   * Ve a la consola de Firebase > Configuración del proyecto > Cuentas de servicio.
   * Haz clic en **Generar nueva clave privada** y descarga el archivo `.json`.

2. **Configura las variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto y toma como referencia el archivo `.env.example`:

   ```env
    PORT=

    FIREBASE_API_KEY=
    FIREBASE_AUTH_DOMAIN= 
    FIREBASE_STORAGE_BUCKET =
    FIREBASE_APP_ID =
    FIREBASE_PROJECT_ID = 
    FIREBASE_MESSAGING_SENDER_ID =

    JWT_SECRET_KEY=

   ```

## 🏃 Descarga y Ejecución

* **Modo Desarrollo (con recarga automática):**
  ```bash
  npm run dev
  ```

* **Modo Producción:**
  ```bash
  npm start
  ```

## 📑 Documentación de la API (Endpoints)

### 🔐 Autenticación y Tokens

Para interactuar con las rutas protegidas de productos, primero iniciar sesión para obtener el token de Firebase ID.

* **POST `/auth/login`** - Inicia sesión y devuelve un token JWT.

#### Ejemplo de Cuerpo de Petición (POST `/auth/login`):
```json
{
   "email": "user@email.com", 
    "password": "strongPass123" 
}
```

### 📦 Productos (CRUD Protegido)

> ⚠️ **Importante:** Todas las rutas de productos requieren autenticación. Debes incluir el token generado en las cabeceras HTTP de la petición como un **Bearer Token**:
> `Authorization: Bearer <TU_TOKEN_AQUÍ>`

* **GET `/api/products`** - Obtiene todas los productos (Requiere Token).
* **GET `/api/products/id`** - Obtiene el producto con el id indicado (Requiere Token).

* **POST `/api/products`** - Crea un nuevo producto (Requiere Token).
* **PUT `/api/products/id`** - Actualiza el producto con el id indicado (Requiere Token).

* **DELETE `/api/products/id`** - Elimina el producto con el id indicado (Requiere Token).

#### Ejemplo de Cuerpo de Petición (POST `/api/products/`):
```json
{
  "name": "Nomnbre del producto",
  "category": "Categoría del producto",
  "price": "Precio del producto"
}
```
