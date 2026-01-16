import React from "react";

import { cardsTickets } from "../../mockups/mockupsData";
import { IconoProgramadas, IconoEspera, IconoProceso, IconoCubiculo, IconoSillon, IconoLaboratorio, IconoSilla, IconoTriaje, IconoConsultorio } from "./../../components/Icons/iconsSVG";


export function CardCounter(props) {
  const { card, totalServicio, text } = props;
  let statusColor = "";
  let textColor = "";
  let icono = "";
  switch (card) {
    case "programadas":
      statusColor = "bg-status-programado bg-opacity-10";
      textColor = "text-status-programado";
      icono = <IconoProgramadas/>;
      break;
    case "espera":
      statusColor = "bg-status-espera bg-opacity-10";
      textColor = "text-status-espera";
      icono = <IconoEspera/>
      break;
    case "proceso":
      statusColor = "bg-status-proceso bg-opacity-10";
      textColor = "text-status-proceso";
      icono = <IconoProceso/>
      break;
  }

  return (
    <>
      <div className="grid grid-flow-col auto-cols-max gap-4 p-4 bg-[#F9F9F9] rounded-lg justify-between shadow-100">
        <div className={`px-4 py-4 ${statusColor} rounded-lg`}>
          {icono}
        </div>
        <div>
          <div className="grid grid-rows-2 grid-flow-col text-end">
            <p className="text-sm text-gray-400">{text}</p>
            <span className={`text-[20px] font-bold ${textColor}`}>{totalServicio}</span>
          </div>

          <div>
            <div className="grid grid-cols-5 gap-2">
              {cardsTickets.map((card) => (
                <div>
                  <p className="text-[12px]">
                    {card.servicio}:{" "}
                    <span className="text-[12px] font-bold">{card.total}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function CardDashboardOPUC(props) {
  const { card, text, counterUso, counterDisponible } = props;
  let disponible = "text-green-600";
  let enUso = "text-red-600";
  let icono = "";
  switch (card) {
    case "cubiculo":
        disponible,
        enUso,
        icono = <IconoCubiculo />;
      break;
    case "sillon":
        disponible,
        enUso,
        icono = <IconoSillon />;
      break;
    case "laboratorio":
        disponible,
        enUso,
        icono = <IconoLaboratorio />;
      break;
    case "consultorio":
        disponible,
        enUso,
        icono = <IconoConsultorio />;
      break;
    case "triaje":
        disponible,
        enUso,
        icono = <IconoTriaje />;
      break;
    case "aprobacion":
        disponible,
        enUso,
        icono = <IconoSilla />;
      break;
  }
  return (
    <>
      <div className="grid grid-flow-col auto-cols-max gap-4 p-4 bg-[#F9F9F9] rounded-lg justify-between shadow-100 content-center">
        {icono}
        <div className="text-end font-semibold">
          <span>{text}</span>
          <div className="flex gap-2 align-middle justify-end font-semibold">
            <span className={`text-sm ${disponible}`}>Disponibles: {counterDisponible}</span>
            <span className={`text-sm ${enUso}`}>En uso: {counterUso}</span>
          </div>
        </div>
      </div>
    </>
  )
}