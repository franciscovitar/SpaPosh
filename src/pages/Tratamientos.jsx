import React from "react";
import TratamientosWlc from "../components/Tratamientos/TratamientosWlc";
import TratamientosTexto from "../components/Tratamientos/TratamientosTexto";
import TratamientosMasc from "../components/Tratamientos/TratamientosMasc";

function Tratamientos() {
  return (
    <div>
      <TratamientosWlc></TratamientosWlc>
      <TratamientosTexto></TratamientosTexto>
      <TratamientosMasc></TratamientosMasc>
    </div>
  );
}

export default Tratamientos;
