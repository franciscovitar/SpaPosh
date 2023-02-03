import React from "react";
import { motion } from "framer-motion";
import electro from "../../image/electrofitness.jpg";

function Electrofitness() {
  return (
    <div className="electro-container container-fluid">
      <div className="fila">
        <div className="texto">
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            Electrofitness
          </motion.h3>
          <motion.div
            className="line"
            viewport={{ once: true }}
            initial={{ width: 5 }}
            whileInView={{ width: 60, transition: { duration: 0.5 } }}
          >
            {" "}
          </motion.div>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
          >
            El electrofitness es la tecnología que permite estimular al cuerpo
            con entrenamientos musculares intensivos, haciendo trabajar a los
            músculos utilizando una estimulación simultánea de la musculatura
            profunda y superficial y sin recargar las articulaciones,
            abdominales ni pectorales.
          </motion.p>
          <motion.a
            href="/electro-fitness"
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            className="continuar"
          >
            Continuar leyendo...
          </motion.a>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="imagen"
        >
          <div className="imagen-zoom">
            <motion.img
              whileHover={{
                scale: 1.08,
                transition: { duration: 0.4 },
              }}
              src={electro}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Electrofitness;
