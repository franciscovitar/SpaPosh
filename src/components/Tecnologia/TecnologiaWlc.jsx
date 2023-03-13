import React from "react";
import { motion } from "framer-motion";

function TecnologiaWlc() {
  return (
    <div className="tecnologia-wlc-container">
      <div className="container">
        <motion.h1
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          Tecnología
        </motion.h1>
      </div>
    </div>
  );
}

export default TecnologiaWlc;
