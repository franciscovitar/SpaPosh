import React from "react";
import { motion } from "framer-motion";
import Buda from "../../image/pexels-breakingpic-3188.jpg";

function Nosotros() {
  return (
    <div className="nosotros-container container-fluid">
      <div className="fila">
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
              src={Buda}
            />
          </div>
        </motion.div>
        <div className="texto">
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0 },
            }}
          >
            Nuestro centro
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
            Está ubicado en la mejor zona del sur de la ciudad de Córdoba ,
            donde nuestra prioridad es dar soluciones utilizando la medicina y
            la tecnología poniendola al servicio del bienestar y cuidado del
            rostro y cuerpo de hombres y mujeres{" "}
            <span>desde hace más de 20 años</span>. Nuestro objetivo es
            <span> mejorar la calidad de vida de nuestros pacientes</span> con
            una atención totalmente personalizada, tratando sus necesidades
            estéticas, con tecnología de vanguardia y productos de excelencia.
          </motion.p>
          <motion.a
            href="/nosotros"
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
      </div>
    </div>
  );
}

export default Nosotros;
