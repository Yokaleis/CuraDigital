# 🧮 Contador de Servicios

Este proyecto incluye un componente `ContadorServicios` que muestra el número de usuarios por cada tipo de servicio.  
Los datos provienen del estado global de Redux (`state.usuarios.usuarios`).

---

## 📘 Documentación del componente

### Funcionamiento
1. Obtiene la lista de usuarios desde Redux con `useSelector`.
2. Define una lista fija de servicios (`serviciosList`).
3. Asocia cada servicio con un ícono (`serviciosIconos`).
4. Usa `useMemo` para calcular los contadores:
   - Recorre cada servicio con `reduce`.
   - Filtra los usuarios que tienen ese servicio.
   - Acepta dos formatos de datos:
     - Array de strings: `["Laboratorio", "RayosX"]`
     - Array de objetos: `[{label:"Laboratorio", value:"Laboratorio"}]`
5. Renderiza una grilla con cada servicio y su contador.

### Ejemplo de resultado
```js
{
  Laboratorio: 3,
  RayosX: 1,
  Ecografia: 0,
  Procedimiento: 2,
  Pediatria: 1,
  Interconsulta: 0,
  Tratamiento: 0
}
