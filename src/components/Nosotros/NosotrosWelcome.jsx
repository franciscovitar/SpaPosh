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
      </div>
    </div>
  );
}

export default NosotrosWelcome;
