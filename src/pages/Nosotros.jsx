import React from "react";
import NosotrosWelcome from "../components/Nosotros/NosotrosWelcome";
import Nos from "../components/Home/Nosotros";
import NosDiagCom from "../components/Nosotros/NosDiagCom";
import NosTecno from "../components/Nosotros/NosTecno";

function Nosotros() {
  return (
    <div>
      <NosotrosWelcome></NosotrosWelcome>
      <Nos></Nos>
      <NosDiagCom></NosDiagCom>
      <NosTecno></NosTecno>
    </div>
  );
}

export default Nosotros;
