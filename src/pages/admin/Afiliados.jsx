import React, { useEffect, useState } from 'react'
import { Header } from '../component/Header'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import { ButtonPrimary, ButtonSecondary } from '../component/Buttons';
import { child, get, getDatabase, onValue, ref } from 'firebase/database';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/credenciales';


export function TableHeader() {
  return (
    <>
      <thead className="text-center font-bold lg:text-sm md:text-[9px] max-sm:text-[12px] text-black bg-[#F6F6F6]  dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* <th>N° atención</th> */}
            <th scope="col" className="p-3 text-center">Nombres y Apellidos</th>
            <th scope="col" className="p-3 text-center">Cédula de identidad</th>
            <th scope="col" className="p-3 text-center">Edad</th>
            <th scope="col" className="p-3 text-center">Fecha de nacimiento</th>
            <th scope="col" className="p-3 text-center">Aseguradora</th>
            <th scope="col" className="p-3 text-center">Plan</th>
            <th scope="col" className="p-3 text-center">Acciones</th>
          </tr>
        </thead>
    </>
  );
}

export function TableBody() {

  //TRAYENDO DATOS DE FIBASE DB
  //Este metodo es para traer datos de cloud firestore
  const [datosAfiliados, setDatosAfiliados] = useState([])

  /* useEffect(() => {
    const obtenerDatos = async () => {
      const data = await getDocs(collection(db, "afiliados"));
      setDatosAfiliados(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    };
    obtenerDatos();
  }, [])
   */

  //TRAYENDO DATOS DE FIBASE DB
  //Este metodo es para traer datos de realtime database
  
  useEffect(() => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, "afiliados/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // 2. Transformar el objeto de Firebase en un Array para poder usar .map()
          const data = snapshot.val();
          const listaFormateada = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
          
          setDatosAfiliados(listaFormateada); // 3. Actualizar el estado (esto dispara el render)
        }
      })
      .catch((error) => console.error(error));
  }, []); // El array vacío asegura que solo se ejecute al cargar el componente



  const usuarios = useSelector((state) => state.usuarios.usuarios);
  //console.log(usuariosState)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (index) => {
    dispatch(setUserToEdit({ user: usuarios[index], isEditing: true }));
    navigate(`/administrador/editar-afiliado/${usuarios[index].id}`);
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
          {datosAfiliados.length === 0 ? (
            <tr className="text-center">
                <p className="w-[100%] text-[14px] text-black">No hay usuarios en la lista</p>
            </tr>
          ) : (
            <tbody>
              {datosAfiliados.map((user, index) => (
                <tr
                  key={user.id}
                  className="border border-[#E6EBF1] border-t-0 rounded-sm text-black text-center"
                >
                  <td className="px-6 py-4">{user.nombre}</td>
                  <td className="px-6 py-4">{user.cedula}</td>
                  <td className="px-6 py-4">{user.edad}</td>
                  <td className="px-6 py-4">{user.fechaNacimiento}</td>
                  <td className="px-6 py-4">{user.aseguradora}</td>
                  <td className="px-6 py-4">{user.plan}</td>
                  {/* <td>{user.via}</td> */}
                  <td className="px-6 py-4 grid grid-cols-2 gap-1 place-items-center">
                    <button className="text-center">
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
export function Afiliados() {
  return (
    <>
        <Header text="Listado de afiliados"/>
        <div className="flex justify-between mb-5">
            <div className="flex gap-2">
                <input type="text" placeholder="Buscar por nombre" className="border-none rounded bg-gray-100"/>
                <ButtonSecondary text="Buscar"/>
            </div>
                    <div>
                        <Link to={"/administrador/nuevo-afiliado"}>
                    <ButtonPrimary text="Crear atención"/>
                    </Link>
                    </div>
                  </div>
        <TableBody/>
    </>
  )
}
