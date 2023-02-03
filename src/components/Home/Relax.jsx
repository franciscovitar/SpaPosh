import React from "react";
import relax from "../../image/relax.jpg";
import { motion } from "framer-motion";

function Relax() {
  return (
    <div className="relax-container container-fluid">
      <div className="fila">
        <div className="texto">
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            Spa de relax
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
            Es nuestro{" "}
            <span>lugar dedicado a la relajación y a la belleza</span> en el que
            podrás disfrutar de una <span>amplia variedad de tratamientos</span>{" "}
            de cuidado personal con productos cosméticos 100% naturales.
            <span>Conectar a través de los sentidos </span>con el cuerpo;
            liberarlo del estrés diario; mejorar la forma física y emocional.
          </motion.p>
          <motion.a
            href="/spa-relax"
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
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
              src={relax}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Relax;
