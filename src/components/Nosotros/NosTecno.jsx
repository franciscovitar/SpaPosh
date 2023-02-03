import React from "react";
import Tecnolo from "../../image/diag-comp.jpg";
import { motion } from "framer-motion";

function NosTecno() {
  return (
    <div className="tecnologia-container container-fluid">
      <div className="fila">
        <div className="texto">
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            Tecnología
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
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            Conocé nuestra más sofisticada tecnología, el complemento ideal para
            los más variados tratamientos. Mio-Up, Velashape, Lipolaser,
            Criolipólisis, presoterapia, Hifu corporal, Ultracavitación,
            Radiofrecuencia unipolar, bipolar y tripolar, Linfodren UBF, OPT –
            SHR, E-Light (IPL+RF), Ulthera Hifu facial, Oxigenesis y puntas de
            diamante, cama de masajes Syogra, balanza InBody, Electrofitness,
            Hair laser y mucho más!
          </motion.p>
          <motion.a
            href="/tecnologia"
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
        <div className="imagen">
          <div className="imagen-zoom">
            <motion.img
              whileHover={{
                scale: 1.08,
                transition: { duration: 0.4 },
              }}
              src={Tecnolo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NosTecno;
