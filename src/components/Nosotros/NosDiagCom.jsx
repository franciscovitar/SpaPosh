import React from "react";
import { motion } from "framer-motion";

import Comp from "../../image/nos-diag-comp.jpg";
import Toalla from "../../image/Toalla.jpg";
import Masajista from "../../image/masajista.jpg";
import Tecno from "../../image/TecnoLaser.jpg";

function NosDiagCom() {
  return (
    <div className="nos-diag-com-container">
      <div className="fila">
        <div className="galeria">
          <div className="texto">
            <motion.label
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              Características diferenciales
            </motion.label>
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              Diagnostico computarizado
            </motion.h3>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
            >
              Mediante un análisis computarizado del cuerpo conocemos con
              exactitud la estructura ósea y las medidas corporales de cada
              persona. Con ellos, el sistema determinará los objetivos del
              programa a seguir, y se diseñará un programa de tratamientos
              personalizados y específicos.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="imagen"
          >
            <div className="imagen-zoom">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 3, ease: [1, 1, 1, 1] },
                }}
                viewport={{ once: true }}
                src={Comp}
              />
            </div>
          </motion.div>
        </div>

        {/* ALL INCLUSIVE */}

        <div className="galeria">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="imagen"
          >
            <div className="imagen-zoom">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 3, ease: [1, 1, 1, 1] },
                }}
                viewport={{ once: true }}
                src={Toalla}
              />
            </div>
          </motion.div>
          <div className="texto-blanco ">
            <motion.label
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              Características diferenciales
            </motion.label>
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              All inclusive
            </motion.h3>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
            >
              Cada clienta dispone de su set personal (toallas, batas,
              pantuflas, etc.) y elementos para la higiene, limpieza y
              humectación de la piel post tratamiento, incluido en el costo del
              mismo.
            </motion.p>
          </div>
        </div>

        {/* Capacitación */}

        <div className="galeria">
          <div className=" texto ">
            <motion.label
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              Características diferenciales
            </motion.label>
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              Capacitación del Personal
            </motion.h3>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
              Seleccionamos las mejores profesionales que son capacitadas y
              evaluadas de manera periódica por la empresa con el objetivo de
              mantenerlas actualizadas en materia de Técnicas y Estética
              Integral, Atención Comercial y Satisfacción del Cliente.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className=" imagen"
          >
            <div className="imagen-zoom">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 3, ease: [1, 1, 1, 1] },
                }}
                viewport={{ once: true }}
                src={Masajista}
              />
            </div>
          </motion.div>
        </div>

        {/* TECNOLOGIA */}

        <div className="galeria">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className=" imagen"
          >
            <div className="imagen-zoom">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 3, ease: [1, 1, 1, 1] },
                }}
                viewport={{ once: true }}
                src={Tecno}
              />
            </div>
          </motion.div>
          <div className=" texto-blanco ">
            <motion.label
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              Características diferenciales
            </motion.label>
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              Tecnología aplicada
            </motion.h3>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
              Equipamiento de última generación que permite obtener resultados
              efectivos, inmediatos y duraderos.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NosDiagCom;
