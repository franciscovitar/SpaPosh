import React from "react";
import { motion } from "framer-motion";
import Carousel from "./SpaRelaxCarousel";

function SpaRelaxTexto() {
  return (
    <div id="sparelax" className="spa-relax-texto-container ">
      <div className="fila">
        <div className="left">
          <div className="left-text ">
            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              Un regalo especial y diferente
            </motion.h1>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              Elegí uno de nuestros vouchers de tratamientos y regalá una
              experiencia relajante en un ambiente único. Experiencias de
              bienestar y belleza para el cuerpo y la mente.
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
              <span>Un regalo especial y diferente.</span>
            </motion.p>
          </div>
        </div>
        <div className="right">
          <Carousel></Carousel>
        </div>
      </div>
    </div>
  );
}

export default SpaRelaxTexto;
