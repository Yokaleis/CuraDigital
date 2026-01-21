import { useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { deleteUsuario, setUserToEdit } from "../../features/usuarios/usuariosSlice";

import { SlideCounter, SlideCounterInterconsultas } from "../component/SlideCounterComponent";
import { ButtonPrimary } from "../../pages/component/Buttons";
import { BubbleSpan } from '../component/Bubble';
import { Header } from "../component/Header";

/* REACT ICONS */
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { LabIcon, RayosXIcon, EcoIcon, InterconsultaIcon, TratamientoIcon, ProcedientoIcon } from "../../components/Icons/iconsSVG";
import { useMemo } from "react";

export function TableHeader() {
  return (
    <>
      <thead className="text-center font-bold lg:text-sm md:text-[9px] max-sm:text-[12px] text-black bg-[#F6F6F6]  dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* <th>N° atención</th> */}
            <th scope="col" className="p-3">Nombres y Apellidos</th>
            <th scope="col" className="p-3">Cédula de identidad</th>
            <th scope="col" className="p-3">Edad</th>
            <th scope="col" className="p-3">Aseguradora</th>
            <th scope="col" className="p-3">Servicios</th>
            <th scope="col" className="p-3">Creación</th>
            <th scope="col" className="p-3">Acciones</th>
          </tr>
        </thead>
    </>
  );
}

export function TableBody() {
  const usuarios = useSelector((state) => state.usuarios.usuarios);
  //console.log(usuariosState)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (index) => {
    dispatch(setUserToEdit({ user: usuarios[index], isEditing: true }));
    navigate(`/administrador/editar-atencion/${usuarios[index].id}`);
  };
  const handleDelete = (index) => {
    dispatch(deleteUsuario(index));
    console.log("Eliminando " + handleDelete);
  };

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <TableHeader />
          {usuarios.length === 0 ? (
            <tr className="text-center">
                <p className="w-[100%] text-[14px] text-black">No hay usuarios en la lista</p>
            </tr>
          ) : (
            <tbody>
              {usuarios.map((user, index) => (
                <tr
                  key={index}
                  className="border border-[#E6EBF1] border-t-0 rounded-sm text-black text-center"
                >
                  <td className="px-6 py-4">{user.nombre}</td>
                  <td className="px-6 py-4">{user.cedula}</td>
                  <td className="px-6 py-4">{user.edad}</td>
                  <td className="px-6 py-4">{user.aseguradora}</td>
                  <td className="px-6 py-4">
                    {user.servicio &&
                      user.servicio.map((servicio, index) => (
                        <BubbleSpan
                          key={`${servicio.value}-${index}`}
                          text={servicio.label || servicio}
                        />
                      ))}
                  </td>
                  <td className="px-6 py-4">{user.creacion}</td>
                  {/* <td>{user.via}</td> */}
                  <td className="px-6 py-4 grid grid-cols-2 gap-1 place-items-center">
                    <button>
                      <HiOutlineTrash onClick={() => handleDelete(index)} />
                    </button>
                    <button onClick={() => handleEdit(index)}>
                      <HiOutlinePencil />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
export function AntencionesUCcopy() {
  
    return (
        <>
        <Header text="Listado de atenciones"/>
        <div className="grid grid-flow-col grid-cols-2/2 gap-2">
        <ContadorServicios/>
          </div>
          <div className="grid justify-items-end mb-10">
            <Link to={"/administrador/nueva-atencion"}>
            <ButtonPrimary text="Crear atención"/>
            </Link>
          </div>
        <TableBody/>
        </>
    )
}

/**
 * Componente ContadorServicios
 * 
 * Este componente muestra un contador de usuarios por cada tipo de servicio.
 * Los datos provienen del estado global de Redux (state.usuarios.usuarios).
 * 
 * Admite dos formatos de datos en la propiedad `servicio` de cada usuario:
 * - Array de strings: ["Laboratorio", "RayosX"]
 * - Array de objetos: [{label:"Laboratorio", value:"Laboratorio"}]
 */

export function ContadorServicios() {

  // 1. Obtenemos la lista de usuarios desde Redux
  const usuarios = useSelector((state) => state.usuarios.usuarios);

  // 2. Definimos los servicios que queremos contabilizar
  const serviciosList = [
    "Laboratorio", 
    "RayosX", 
    "Ecografia", 
    "Procedimiento", 
    "Pediatria", 
    "Interconsulta", 
    "Tratamiento",
  ]

  // 3. Asociamos cada servicio con un ícono
  const serviciosIconos = {
    Laboratorio: <LabIcon/>,
    RayosX: <RayosXIcon/>,
    Ecografia: <EcoIcon/>,
    Procedimiento: <ProcedientoIcon/>,
    Pediatria: <InterconsultaIcon/>,
    Interconsulta: <InterconsultaIcon/>,
    Tratamiento: <InterconsultaIcon/>
  }

  /** * 4. Calculamos los contadores de servicios usando useMemo * 
   * - Recorremos la lista de servicios con reduce. 
   * - Para cada servicio, filtramos los usuarios que lo tienen asignado. 
   * - La verificación acepta tanto strings como objetos {label, value}. 
   * * - Guardamos el total en un objeto acumulador. */
  const servicioContador = useMemo(() => { 
    return serviciosList.reduce((acc, service) => { 
      acc[service] = usuarios.filter((user) => { 
        const arr = user.servicio; 
        // Caso 1: Si es array de strings 
        if (Array.isArray(arr) && arr.some((s) => s === service)) { 
          return true; 
        } 
        // Caso 2: Si es array de objetos {label, value} 
        if ( Array.isArray(arr) && 
        arr.some((s) => s?.value === service || s?.label === service) ) { 
          return true; 
        } return false; }).length; return acc; }, 
        {});
       }, [usuarios, serviciosList]);
  // 5. Renderizamos la grilla con cada servicio y su contador
  return (
    <>
    <>
    <div className="grid grid-cols-3 gap-2">
      {serviciosList.map((service) => (
        <div
          key={service}
          className="grid grid-flow-col auto-cols-max gap-4 p-4 bg-white border border-gray-200 rounded-lg justify-between shadow-100"
        >
          <div className="flex items-center">
            
            <span className="mr-2">{serviciosIconos[service]}</span>
            {/* Renderiza el nombre del servicio y el contador */}
            <span>{service}: {servicioContador[service] || 0}</span>
          </div>
        </div>
      ))}
    </div>
  </>
    </>
  )
}