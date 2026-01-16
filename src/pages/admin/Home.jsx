import React from "react";
import { Header, HeaderCaption } from "../component/Header";
import { BotonHome } from "../component/BotonHome";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { IconoAtenciones, IconoDashboard, IconoSedes, IconoServicios, IconoUC } from "../../components/Icons/iconsSVG";



export function Home() {

    const { usuario } = useAuth();

    const HomeConfig = {
        administrador: [
            { path: "/administrador/dashboards", label: "Dashboards", icono: <IconoDashboard /> },
            { path: "/administrador/atenciones", label: "Atenciones", icono: <IconoAtenciones /> },
            { path: "/administrador/aurgentcare", label: "Urgent Care", icono: <IconoUC /> }
        ],
        despachador: [
            { path: "/despachador/dashboards", label: "Dashboards", icono: <IconoDashboard /> },
            { path: "/despachador/ateprogramadas", label: "Atenciones programadas", icono: <IconoAtenciones /> },
            { path: "/despachador/gservicios", label: "Gestión de servicios", icono: <IconoServicios /> }
        ]
    }

    if (!usuario) return null;

    const opciones = HomeConfig[usuario?.rol] || [];

    return (
        <>
            <Header text="Bienvenida, " name={usuario?.displayName} />
            <HeaderCaption text="A continuación seleccione uno de los servicios para empezar."/>
            <div className="grid grid-cols-4 gap-4 items-center justify-items-center grid-rows-3 p-40">
                {opciones.map((item) => (
                    <div key={item.path}>
                        <Link to={item.path}>
                            <BotonHome text={item.label} boton={item.icono} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}