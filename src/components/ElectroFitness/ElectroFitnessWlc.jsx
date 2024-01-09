import React from "react";
import { motion } from "framer-motion";

function ElectroFitnessWlc() {
  return (
    <div className="electro-fitnes-wlc">
      <div className="container">
        <motion.h1
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          ElectroFitness
        </motion.h1>
      </div>
    </div>
  );
}

export default ElectroFitnessWlc;
