import React from "react";

import { IconoAtenciones, IconoSedes, IconoClientes, IconoServicios, IconoAfiliados, IconoUsuarios, IconoConfiguraciones, IconoTripulaciones } from "../../components/Icons/iconsSVG";


export function BotonHome(props) {
    const {boton, text} = props;

    /* let icono = "";

    switch (boton) {
      case "atenciones":
        icono = <IconoAtenciones />;
        break;
      case "sedes":
        icono = <IconoSedes />;
        break;
      case "clientes":
        icono = <IconoClientes />;
        break;
      case "servicios":
        icono = <IconoServicios />;
        break;
      case "afiliados":
        icono = <IconoAfiliados />;
        break;
      case "usuarios":
        icono = <IconoUsuarios />;
        break;
      case "tripulaciones":
        icono = <IconoTripulaciones />;
        break;
      case "configuraciones":
        icono = <IconoConfiguraciones />;
        break;
    } */


    return (
      <div className="w-40 h-40 grid items-center border border-primary hover:bg-primary hover:bg-opacity-10 hover:border-none transition-colors justify-items-center p-5 rounded-md">
        {boton}
        <p className="font-medium text-primary">{text}</p>
      </div>
    );
}