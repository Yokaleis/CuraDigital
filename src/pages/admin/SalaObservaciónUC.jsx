import { React } from "react";

import { Header } from "../component/Header";
import { CardDashboardOPUC } from "../component/CardCounter";


export function SalaObservacionUC () {
    return(
        <>
        <Header text="Dashboard Observación Pacientes UC"/>

        <div className="grid md:grid grid-flow-col lg:grid-cols-6 gap-2">
            <CardDashboardOPUC text="Cubículo: 5" card="cubiculo" counterUso="2" counterDisponible="3"/>
            <CardDashboardOPUC text="Sillón: 8" card="sillon" counterUso="2" counterDisponible="6"/>
            <CardDashboardOPUC text="Laboratorio: 2" card="laboratorio" counterUso="2" counterDisponible="0"/>
            <CardDashboardOPUC text="Consultorio: 5" card="consultorio" counterUso="4" counterDisponible="1"/>
            <CardDashboardOPUC text="Triaje: 4" card="triaje" counterUso="3" counterDisponible="1"/>
            <CardDashboardOPUC text="Aprobación: 2" card="aprobacion" counterUso="1" counterDisponible="1"/>
        </div>
        </>
    )
}