import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* REACT ICONS */
import { HiChevronDown } from "react-icons/hi";
/* SVGs */
import { LogoCuraDigitalIcon } from '../Icons/iconsSVG';
import { getAuth, signOut } from 'firebase/auth';
import { useAuth } from '../../context/authContext';



export function Sidebar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);


    function handleLogout() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("✅ Usuario ha cerrado sesión");
    })
    .catch((error) => {
      console.error("❌ Error al cerrar sesión:", error);
    });

  }
    return (
        <>
        <div className={`xl:h-[100vh] fixed xl:static bg-[#F7F6F9] w-[70%] md:w-[30%] lg:[w-25%] xl:w-auto h-full top-0 p-2 flex flex-col justify-between z-50 
        ${showMenu ? "left-0" : "-left-full"} transition-all`}>
            {/* LOGO */}
            <div>
            <div className='m-4 flex justify-center'><LogoCuraDigitalIcon/></div>
            <ul>
                <li className='mb-8'>
                    <Link to="home" className="w-full flex items-center justify-between gap-4 py-2 px-4 font-bold hover:text-primary transition-colors">Home</Link>
                </li>
                <li className='mb-8'>
                    <button onClick={() => setShowSubMenu(!showSubMenu)}
                        className="w-full flex items-center justify-between gap-4 py-2 px-4 rounded-lg hover:text-primary transition-colors">
                        <span className="flex items-center font-bold gap-4">Dashboards</span>
                        <HiChevronDown
                            className={`mt-1 ${
                                showSubMenu && "rotate-180"
                            } transition-all`}
                            />
                    </button>
                    <ul className={`my-2 ${!showSubMenu && "hidden"}`}>
                        <li className='mb-2'>
                        <Link to="salaobservacionesuc" className="p-4 hover:text-primary">Pacientes en Sala de Observación</Link>
                        </li>
                    </ul>
                </li>

                <li className='mb-8'>
                    <Link to="atenciones" className="w-full flex items-center justify-between gap-4 py-2 px-4 font-bold hover:text-primary transition-colors">Listado de atenciones</Link>
                </li>
                <li className='mb-8'>
                    <Link to="aurgentcare" className="w-full flex items-center justify-between gap-4 py-2 px-4 font-bold hover:text-primary transition-colors">Urgent Care</Link>
                </li>    

                <li className='mb-8'>
                    <Link onClick={handleLogout} className="w-full flex items-center justify-between gap-4 py-2 px-4 font-bold hover:text-primary transition-colors">Salir</Link>
                </li>            
            </ul>
            </div>
            
        </div>
        </>
    )
}

export function SidebarCondicional() {
    const [showMenu, setShowMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);


    function handleLogout() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("✅ Usuario ha cerrado sesión");
    })
    .catch((error) => {
      console.error("❌ Error al cerrar sesión:", error);
    });

  }

    const menuConfig = {
        administrador: [
            { path: "home", label: "Home" },
            {
                dashboards: [
                    { path: 'centralizado', label: 'Dashboards centralizado' },
                    { path: 'urgentcare', label: 'Dashboards Urgent Care' },
                    { path: 'omv', label: 'Dashboards OMV' },
                    { path: "ateprogramadas", label: "Atenciones programadas" },
                    { path: "gservicios", label: "Gestión de servicios" },
                    { path: "gunidades", label: "Gestión de unidades" },
                    { path: "salaobservacionesuc", label: "Pacientes en Sala de Observación" },
                    { path: "monitoreofarmacia", label: "Monitoreo de farmacia" },
                    { path: "analistas", label: "Analistas" },
                ],
            },
            { path: "atenciones", label: "Atenciones" },
            { path: "aurgentcare", label: "Urgent Care" },
            
        ],
        despachador: [
            { path: "home", label: "Home" },
            { path: "ateprogramadas", label: "Atenciones programadas" },
            { path: "gservicios", label: "Gestión de servicios" }
        ]
    }

    const { usuario } = useAuth();

    if(!usuario) return null;

    const opciones = menuConfig[usuario?.rol] || [];

    return (
        <>
        <div className={` flex fixed xl:static bg-[#F7F6F9] w-[70%] md:w-[30%] lg:[w-25%] xl:w-auto h-full top-0 p-2 flex-col justify-between z-50 
        ${showMenu ? "left-0" : "-left-full"} transition-all`}>
            <div>
                <div className="grid mb-8">
                <div className='m-4 flex justify-center'><LogoCuraDigitalIcon/></div>
                    <div className="grid">
                        <span className="ml-4 text-sm font-semibold">{usuario?.rol.charAt(0).toUpperCase() + usuario?.rol.slice(1).toLowerCase()}</span>
                        <span className="ml-4 text-xs">{usuario?.email}</span>
                    </div>
            </div>
            <hr class="my-8 border-gray-200 dark:border-gray-700" />
            <div>
                <ul>
                {opciones.map((item) => (
                    <>
                    <li className="mb-8" key={item.path}>
                        <Link className="flex px-4 font-bold hover:text-primary transition-colors" to={item.path}>{item.label}</Link>
                    </li>
                    {item.dashboards && (
                       <li className="mb-8">
                            <button onClick={() => setShowSubMenu(!showSubMenu)}
                                className="w-full flex items-center justify-between  py-2 px-4 rounded-lg hover:text-primary transition-colors">
                                <span className="flex items-center font-bold">Dashboards</span>
                                <HiChevronDown
                                    className={`mt-1 ${
                                        showSubMenu && "rotate-180"
                                    } transition-all`}
                                    />
                            </button>
                    <ul className={`my-2 ${!showSubMenu && "hidden"}`}>
                        {item.dashboards.map((subItem, subIndex) => (
                            <li className="mb-2" key={subItem}>
                        <Link to="salaobservacionesuc" className="p-4 hover:text-primary">{subItem.label}</Link>
                        </li>
                        ))}
                    </ul>
                </li>
                    )}
                   </> 
                ))}
                <hr class="my-8 border-gray-200 dark:border-gray-700" />
                   
            </ul>
            </div>
            <div className='mt-10'>
                <ul>
                    <li  className="mb-8">
                    <Link onClick={handleLogout} className="w-full flex items-center justify-between gap-4 py-2 px-4 font-bold hover:text-primary transition-colors">Salir</Link>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </>
    )
}