import React from "react";
import { motion } from "framer-motion";

function NosotrosWelcome() {
  return (
    <div className="nosotros-welcome-container">
      <div className="container">
        <motion.h1
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          Nosotros
        </motion.h1>
        <motion.i
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          class="bi bi-arrow-down-short"
        ></motion.i>
      </div>
    </div>
  );
}

export default NosotrosWelcome;
