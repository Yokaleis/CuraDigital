import { useState } from 'react'

import { HeaderSecondary } from '../component/Header'
import { ButtonCancel, ButtonPrimary, ButtonWhithIcon } from '../component/Buttons'
import { HiPlus } from 'react-icons/hi'

import { getDatabase, ref, set, push } from 'firebase/database';
import appFirebaseCD from '../../Firebase/credenciales';
import { CalcularEdad } from '../component/CalcularEdad';

export function NuevoAfiliado() {

    //TODO: SIMPLIFICAR ESTO 
    const [nombre, setNombre] = useState("");
    const [cedula, setCedula] = useState("");
    const [edad, setEdad] = useState("");
    const [genero, setGenero] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [direccion, setDireccion] = useState("");
    const [estado, setEstado] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [aseguradora, setAseguradora] = useState("");
    const [plan, setPlan] = useState("");
    const [ramo, setRamo] = useState("");
    const [fechaInicioPoliza, setFechaInicioPoliza] = useState("");
    const [fechaFinPoliza, setFechaFinPoliza] = useState("");

   

    const guardarDatos = async (e) => {
        e.preventDefault();

        const db = getDatabase(appFirebaseCD);
        const newDocRef = push(ref(db, "afiliados"));
        set(newDocRef, {
            nombre,
            cedula,
            edad,
            genero,
            fechaNacimiento,
            direccion,
            estado,
            municipio,
            email,
            telefono,
            aseguradora,
            plan,
            ramo,
            fechaInicioPoliza,
            fechaFinPoliza

        }).then( () => {
            alert("Datos guardados correctamente en Firebase! 🔥");
            console.log("Datos guardados:", { nombre, cedula });
        }).catch((error) => {
            console.log("error", error.message)
        })
    }
  return (
    <div>
      <HeaderSecondary link="/administrador/afiliados" text="Nuevo afiliado"/>
      <h4 className="font-bold mb-5">Agregue un nuevo afiliado</h4>

          <form onSubmit={guardarDatos}>
              <div className="grid grid-cols-4 gap-4 mb-10">
                  {/* NOMBRES Y APELLIDOS */}
                  <div>
                      <label htmlFor="nombre" className="font-semibold">
                          Nombres y Apellidos
                      </label>
                      <div>
                          <input
                              type="text"
                              value={nombre}
                              onChange={(e) => setNombre(e.target.value)}
                              id="nombre"
                              name="nombre"
                              placeholder="Laura Gutiérrez Ríos"
                              className="w-full mt-2 p-2 border-none rounded bg-color01 placeholder-gray-400"
                          />
                      </div>
                  </div>
                  {/* CEDULA */}
                  <div>
                      <label htmlFor="cedula" className="font-semibold">
                          Cédula de identidad
                      </label>
                      <div>
                          <input
                              type="text"
                              value={cedula}
                              onChange={(e) => setCedula(e.target.value)}
                              name="cedula"
                              id="cedula"
                              placeholder="6.295.195"
                              className="w-full mt-2 p-2 border-none rounded bg-color01 placeholder-gray-400"
                          />
                      </div>
                  </div>
                  {/* TODO: SELECT SEXO */}
                  <div>
                      <label htmlFor="genero" className="font-semibold">
                          Sexo
                      </label>
                      <select 
                      name="genero"
                      value={genero}
                      onChange={(e) => setGenero(e.target.value)} 
                      id="genero" 
                      className="w-full mt-2 p-2 border-none rounded bg-color01 text-gray-400">
                          <option value="">Seleccione el sexo</option>
                          <option value="femenino">Femenino</option>
                          <option value="masculino">Masculino</option>
                      </select>
                  </div>
                  {/* FECHA NACIMIENTO */}
                 {/*  <div>
                      <label htmlFor="fechaNacimiento" className="font-semibold">
                          Fecha de nacimiento
                      </label>
                      <div>
                          <input
                              type="date"
                              name="fechaNacimiento"
                              value={fechaNacimiento}
                              onChange={(e) => setFechaNacimiento(e.target.value)} 
                              id="fechaNacimiento"
                              placeholder="04/04/1990"
                              className="w-full mt-2 p-2 border-none rounded bg-color01 text-gray-400"
                          />
                      </div>
                  </div> */}
                   <CalcularEdad edad={edad} fecha={fechaNacimiento} onEdadChange={setEdad} onFechaChange={setFechaNacimiento} />
                  {/* DIRECCIÓN */}
                  <div>
                      <label htmlFor="direccion" className="font-semibold">
                          Dirección
                      </label>
                      <div>
                          <input
                              type="text"
                              name="direccion"
                              value={direccion}
                              onChange={(e) => setDireccion(e.target.value)} 
                              id="direccion"
                              placeholder="04/04/1990"
                              className="w-full mt-2 p-2 border-none rounded bg-color01"
                          />
                      </div>
                  </div>
                  {/* ESTADO */}
                  <div>
                      <label htmlFor="estado" className="font-semibold">
                          Estado
                      </label>
                      <select 
                      name="estado" 
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)} 
                      id="estado" 
                      className="w-full mt-2 p-2 border-none rounded bg-color01 text-gray-400">
                          <option value="">Seleccione un estado</option>
                          <option value="distrito capital">Caracas</option>
                          <option value="anzoategui">Anzoategui</option>
                      </select>
                  </div>
                  {/* MUNICIPIO */}
                  <div>
                      <label htmlFor="municipio" className="font-semibold">
                          Municipio
                      </label>
                      <select 
                      name="municipio" 
                      value={municipio}
                      onChange={(e) => setMunicipio(e.target.value)} 
                      id="municipio" 
                      className="w-full mt-2 p-2 border-none rounded bg-color01 text-gray-400">
                          <option value="">Seleccione un municipio</option>
                          <option value="distrito capital">Caracas</option>
                          <option value="anzoategui">Anzoategui</option>
                      </select>
                  </div>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-10">
                 {/* CORREO*/}
                  <div>
                      <label htmlFor="email" className="font-semibold">
                          Correo ecelctrónico
                      </label>
                      <div>
                          <input
                              type="mail"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)} 
                              id="email"
                              name="email"
                              placeholder="alguien@gmail.com"
                              className="w-full mt-2 p-2 border-none rounded bg-color01"
                          />
                      </div>
                  </div>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-10">
                 {/* TELEFONOS*/}
                  <div>
                      <label htmlFor="telefono" className="font-semibold">
                          Teléfono 
                      </label>
                      <div className="mb-5">
                          <input
                              type="tel"
                              value={telefono}
                              onChange={(e) => setTelefono(e.target.value)} 
                              id="telefono"
                              name="telefono"
                              placeholder="0212 678 6543"
                              className="w-full mt-2 p-2 border-none rounded bg-color01 placeholder-gray-400"
                          />
                      </div>
                      <ButtonWhithIcon icon={<HiPlus />} text="Añadir otro número"/>
                  </div>                  
              </div>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              <div className="grid grid-cols-4 gap-4 mb-10">
                {/* ASEGURADORA */}
                  <div>
                      <label htmlFor="aseguradora" className="font-semibold">
                          Aseguradora
                      </label>
                      <select 
                      name="aseguradora" 
                      value={aseguradora}
                      onChange={(e) => setAseguradora(e.target.value)} 
                      id="aseguradora" className="w-full mt-2 p-2 border-none rounded bg-color01 text-gray-400">
                          <option value="">Seleccione una aseguradora</option>
                          <option value="seguros mercantil">Seguros Mercantil</option>
                          <option value="seguros caracas">Seguros Caracas</option>
                      </select>
                  </div>
                  {/* PLAN */}
                  <div>
                      <label htmlFor="plan" className="font-semibold">
                          Plan
                      </label>
                      <select 
                      name="plan" 
                      value={plan}
                      onChange={(e) => setPlan(e.target.value)} 
                      id="plan" className="w-full mt-2 p-2 border-none rounded bg-color01 text-gray-400">
                          <option value="">Seleccione una plan</option>
                          <option value="seguros mercantil">Seguros Mercantil</option>
                          <option value="seguros caracas">Seguros Caracas</option>
                      </select>
                  </div>
                  {/* RAMO */}
                  <div>
                      <label htmlFor="ramo" className="font-semibold">
                          Ramo
                      </label>
                      <select 
                      name="ramo"
                      value={ramo}
                      onChange={(e) => setRamo(e.target.value)}  
                      id="ramo" className="w-full mt-2 p-2 border-none rounded bg-color01 text-gray-400">
                          <option value="">Seleccione un ramo</option>
                          <option value="seguros mercantil">Seguros Mercantil</option>
                          <option value="seguros caracas">Seguros Caracas</option>
                      </select>
                  </div>
              </div>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              <h4 className="font-bold mb-5">Vigencia de póliza</h4>
            <div className="grid grid-cols-4 gap-4 mb-20">
                {/* FECHA INICIO */}
                  <div>
                      <label htmlFor="fechaInicioPoliza" className="font-semibold">
                          Fecha de inicio
                      </label>
                      <div>
                          <input
                              type="date"
                              value={fechaInicioPoliza}
                              onChange={(e) => setFechaInicioPoliza(e.target.value)} 
                              name="fechaInicioPoliza"
                              id="fechaInicioPoliza"
                              placeholder="04/04/1990"
                              className="w-full mt-2 p-2 border-none rounded bg-color01 text-gray-400"
                          />
                      </div>
                  </div>
                  {/* FECHA VENCIMIENTO */}
                  <div>
                      <label htmlFor="fechaFinPoliza" className="font-semibold">
                          Fecha de finalización
                      </label>
                      <div>
                          <input
                              type="date"
                              value={fechaFinPoliza}
                              onChange={(e) => setFechaFinPoliza(e.target.value)} 
                              name="fechaFinPoliza"
                              id="fechaFinPoliza"
                              placeholder="04/04/1990"
                              className="w-full mt-2 p-2 border-none rounded bg-color01 text-gray-400"
                          />
                      </div>
                  </div>
            </div>

            <div className="flex gap-4">
                <ButtonCancel link="/administrador/afiliados" text="Cancelar"/>
                <button type="submit" >Guardar datos</button>
                
            </div>
          </form>
    </div>
  )
}

 
