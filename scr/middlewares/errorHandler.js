
export function errorHandler(err, req, res, next) {
  console.error("❌ Error detectado:", err.message);

  // Mapeo de errores de negocio a respuestas HTTP
  if (err.message === "ID_INVALIDO") {
    return res.status(400).json({ ok: false, message: "El ID provisto no es válido." });
  }
  
  if (err.message === "PRODUCTO_NO_ENCONTRADO") {
    return res.status(404).json({ ok: false, message: "El producto solicitado no existe." });
  }

  // Errores nativos de Firebase o caídas de conexión externas
  if (err.code && err.code.startsWith('auth/')) {
    return res.status(401).json({ ok: false, message: "Error de autenticación con Firebase." });
  }


  if (err.message === "DATOS_VACIOS") {
      return res.status(400).json({ ok: false, message: "EL body no puede estar vacio, faltan los datos" });
  }

  if (err.message === "CAMPOS_OBLIGATORIOS_FALTANTES") {
      return res.status(400).json({ ok: false, message: "Nombre, categoria y precio son campos obligatorios." });
  }


  if (err.message === "CREDENCIALES NO VALIDAS") {
    return res.status(401).json({ ok: false, message: "Las credenciales no son validas." });  
  }

  if (err.message === "NO TIENE PERMISOS") {
        return res.status(403).json({ ok: false, message: "No tiene permisos para acceder" });  
  }

  // Error genérico para fallos imprevistos (500)
  return res.status(500).json({ 
    ok: false, 
    message: "Ocurrió un error interno en el servidor." 
  });
}
