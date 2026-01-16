import { people } from "../../mockups/mockupsData";
import { useSelector } from "react-redux"


import { LabIcon, RayosXIcon, EcoIcon, InterconsultaIcon, TratamientoIcon, ProcedientoIcon } from "../Icons/iconsSVG";
import { useEffect, useState } from "react";

export function CardComponent( { nombre, atenciones, icono } ) {
  const usuariosState = useSelector( state => state.usuarios)
    return(
        <div className="grid grid-flow-col auto-cols-max gap-4 p-4 bg-white border border-gray-200 rounded-lg justify-between shadow-100">
                <div className="px-2 py-2 bg-green-100">{icono}</div>
                <div className="grid grid-rows-2 grid-flow-col text-end">
                    <div>
                        <span className="text-sm font-normal tracking-tight text-gray-500">
                            {nombre}
                        </span>
                    </div>
                    <div>
                        <span className="text-2xl font-extrabold">{atenciones}</span>
                    </div>
                </div>
        </div>
    )
}
export function CountersInterconsultas( { nombre, atenciones, icono }) {
  return (
    <div className="grid w-full grid-flow-col auto-cols-max gap-4 p-4 bg-white border border-gray-200 rounded-lg justify-between shadow-100">
                <div className="px-2 py-2 bg-green-100">{icono}</div>
                <div className="grid grid-rows-2 grid-flow-col text-end">
                    <div>
                        <span className="text-sm font-normal tracking-tight text-gray-500">
                            {nombre}
                        </span>
                    </div>
                    <div>
                        <span className="text-2xl font-extrabold">{atenciones}</span>
                    </div>
                </div>
            </div>
  );
}
export function FirstGroupSlide() {

  const val = people
        .map((x) => x.servicio)
        .reduce(
          (x, xs) =>
            xs.reduce((y, ys) => {
              if (y[ys] == undefined) {
                y[ys] = 1;
              } else {
                y[ys] = y[ys] + 1;
              }
              return y;
            }, x),
          {}
        );

  return (
    <>
    <div className="grid grid-cols-3 gap-2">
        <CardComponent nombre="Laboratorio" atenciones= {val.Laboratorio} icono={<LabIcon/>}/>
        <CardComponent nombre="Ecografía" atenciones= {val.Ecografia} icono={<EcoIcon/>}/>
        <CardComponent nombre="Rayos X" atenciones= {val.RayosX} icono={<RayosXIcon/>}/>
      </div>
    </>
  );
}
export function SecondGroupSlide() {
  const val = people
  .map((x) => x.servicio)
  .reduce(
    (x, xs) =>
      xs.reduce((y, ys) => {
        if (y[ys] == undefined) {
          y[ys] = 1;
        } else {
          y[ys] = y[ys] + 1;
        }
        return y;
      }, x),
    {}
  );

    return (
      <>
      <div className="grid grid-cols-3 gap-2">
          <CardComponent nombre="Tratamiento" atenciones= {val.Tratamiento} icono={<TratamientoIcon/>}/>
          <CardComponent nombre="Procedimiento" atenciones= {val.Tratamiento} icono={<ProcedientoIcon/>}/>
        </div>
      </>
    );
  }

export function ThirdGroupSlide() {
    const val = people
    .map((x) => x.servicio)
    .reduce(
      (x, xs) =>
        xs.reduce((y, ys) => {
          if (y[ys] == undefined) {
            y[ys] = 1;
          } else {
            y[ys] = y[ys] + 1;
          }
          return y;
        }, x),
      {}
    );
      return (
        <>
        <div className="grid gap-2">
            <CountersInterconsultas nombre="Interconsulta Pediatríca" atenciones= {val.Pediatría} icono={<InterconsultaIcon/>}/>
          </div>
        </>
      );
}
export function FourGroupSlide() {
  const val = people
  .map((x) => x.servicio)
  .reduce(
    (x, xs) =>
      xs.reduce((y, ys) => {
        if (y[ys] == undefined) {
          y[ys] = 1;
        } else {
          y[ys] = y[ys] + 1;
        }
        return y;
      }, x),
    {}
  );
    return (
      <>
      <div className="grid gap-2">
          <CountersInterconsultas nombre="Interconsulta Cirugia-General" atenciones= {val.Cirugia} icono={<InterconsultaIcon/>}/>
        </div>
      </>
    );
}

