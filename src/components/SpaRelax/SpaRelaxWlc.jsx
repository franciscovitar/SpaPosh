import React from "react";
import { motion } from "framer-motion";

function SpaRelaxWlc() {
  return (
    <div className="SpaRelaxWlc-container">
      <div className="container">
        <motion.h1
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          Spa Relax
        </motion.h1>
        <a className="icono" href="#sparelax">
          <i class="bi bi-arrow-down"></i>
        </a>
      </div>
    </div>
  );
}

export default SpaRelaxWlc;
