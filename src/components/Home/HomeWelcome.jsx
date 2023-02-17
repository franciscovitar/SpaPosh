import React from "react";
import { motion } from "framer-motion";

function HomeWelcome() {
  return (
    <div className="HomeWelcome-container">
      <div className="container">
        <motion.h3
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
        >
          Promovemos el bienestar y la salud
        </motion.h3>
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
        >
          sin barreras
        </motion.h2>
        <motion.a
          href="/nosotros"
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.4 },
          }}
        >
          Conocenos!
        </motion.a>
      </div>
    </div>
  );
}

export default HomeWelcome;
