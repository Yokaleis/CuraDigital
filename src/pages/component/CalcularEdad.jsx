import React, { useState } from 'react'
import { ButtonSecondary } from './Buttons';

/**
 * Componente CalcularEdad
 * 
 * Props:
 * - fecha {string}: Fecha de nacimiento seleccionada
 * - edad {number}: Edad calculada
 * - onFechaChange {function}: Callback para actualizar la fecha en el padre
 * - onEdadChange {function}: Callback para actualizar la edad en el padre
 * 
 * Renderiza un input para la fecha y otro para mostrar la edad calculada.
 */
export function CalcularEdad({fecha, edad, onFechaChange, onEdadChange}) {

    //Estado para guardar la fecha que selecciona el usuario
     const [calcularfechaNacimiento, setCalcularFechaNacimiento] = useState("");

     // Función que calcula la edad a partir de la fecha
    const calcularEdad = (fecha) => {
        const hoy = new Date();
        const nacimiento = new Date(fecha);
        let edadCalculada = hoy.getFullYear() - nacimiento.getFullYear();
        const diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();

        //Ajustar fecha para saber si el cumpleaño no ha pasado este año
        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < nacimiento.getDate())){
            edadCalculada--;
        }
        onEdadChange(edadCalculada);
    }


  return (
    <div className="flex gap-2">
                      
                      <div>
                        <label htmlFor="fechaNacimiento" className="font-semibold">
                          Fecha de nacimiento
                      </label>
                          <input
                              type="date"
                              name="fechaNacimiento"
                              value={fecha || calcularfechaNacimiento}
                              onChange={(e) => {{setCalcularFechaNacimiento(e.target.value);  onFechaChange(e.target.value);}}} 
                              id="fechaNacimiento"
                              placeholder="04/04/1990"
                              className="w-50 mt-2 p-2 mr-2 border-none rounded bg-color01 text-gray-400"
                          />
                            <button type="button" className="bg-primary bg-opacity-20 text-primary border border-primary font-medium py-2 px-4 rounded-md" onClick={() => calcularEdad(calcularfechaNacimiento)}>Calcular</button>
                        

                      </div>
                      <div>
                          <label htmlFor="fechaNacimiento" className="font-semibold">
                          Edad
                      </label>
                          <input type="number" 
                          className="w-20 mt-2 p-2 border-none rounded bg-color01 text-gray-400" 
                          placeholder="Edad"
                          value={edad || ""} 
                          readOnly/>
                      </div>
                  </div>
  )
}
