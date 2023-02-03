import React from "react";
import Electrofitness from "../components/Home/Electrofitness";
import HomeWelcome from "../components/Home/HomeWelcome";
import Nosotros from "../components/Home/Nosotros";
import Relax from "../components/Home/Relax";
import Tecnologia from "../components/Home/Tecnologia";
import Tratamientos from "../components/Home/Tratamientos";

function Home() {
  return (
    <div>
      <HomeWelcome></HomeWelcome>
      <Nosotros></Nosotros>
      <Tratamientos></Tratamientos>
      <Relax></Relax>
      <Tecnologia></Tecnologia>
      <Electrofitness></Electrofitness>
    </div>
  );
}

export default Home;
