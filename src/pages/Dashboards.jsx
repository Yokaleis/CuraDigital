import React from 'react'
import { Header, HeaderCaption } from './component/Header'
import { useAuth } from '../context/authContext';
import { BotonHome } from './component/BotonHome';
import { IconCentralizado, IconMedicamento, IconoAtenciones, IconoDashboard, IconoServicios, IconoUC } from '../components/Icons/iconsSVG';
import { Link } from 'react-router-dom';

export default function Dashboards() {
    const { usuario } = useAuth();

    const HomeConfig = {
            administrador: [
                { path: "/administrador/dashboards/centralizado", label: "Centralizado", icono: <IconCentralizado /> },
                { path: "/administrador/atenciones", label: "OMV", icono: <IconoDashboard /> },
                { path: "/administrador/aurgentcare", label: "Urgent Care", icono: <IconoUC /> },
                { path: "/administrador/dashboards/centralizado", label: "Atenciones programadas", icono: <IconoDashboard /> },
                { path: "/administrador/atenciones", label: "Gestión de unidades", icono: <IconoDashboard /> },
                { path: "/administrador/aurgentcare", label: "Gestión de servicios", icono: <IconoUC /> }
            ],
            despachador: [
                { path: "/despachador/dashboards/monitoreofarmacia", label: "Monitoreo de Farmacia", icono: <IconMedicamento /> },
                { path: "/despachador/ateprogramadas", label: "Atenciones programadas", icono: <IconoAtenciones /> },
                { path: "/despachador/gservicios", label: "Gestión de servicios", icono: <IconoServicios /> }
            ] 
        }
    
        if (!usuario) return null;
    
        const opciones = HomeConfig[usuario?.rol] || [];
    return (
        <>
            <Header text="Dashboards" />
            <HeaderCaption text="A continuación seleccione uno de los siguientes dashboards para gestionar."/>
            <div>
                <div className="grid grid-cols-4 gap-4 items-center justify-items-center grid-rows-3 p-40">
                    {opciones.map((item) => (
                        <div key={item.path}>
                            <Link to={item.path}>
                                <BotonHome text={item.label} boton={item.icono} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
