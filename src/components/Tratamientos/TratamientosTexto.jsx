import React from "react";
import { motion } from "framer-motion";

import tratamientoCorp from "../../image/tratamiento-Corp.jpg";
import tratfaci from "../../image/trat-facial.jpg";
import lifting from "../../image/Lifting-estetico.jpg";
import depdef from "../../image/dep-def.jpg";

function TratamientosTexto() {
  return (
    <div id="tratamientos" className="tratamientostexto-container">
      <div className="tratamientos-cuerpo container">
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
        >
          Los mejores tratamientos para tu cuerpo
        </motion.h2>
        <motion.div
          className="line"
          viewport={{ once: true }}
          initial={{ width: 5 }}
          whileInView={{ width: 60, transition: { duration: 0.5 } }}
        ></motion.div>
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
        >
          Mediante un análisis computarizado del cuerpo que nos indica con
          exactitud la estructura ósea y las medidas corporales de cada persona.
          Con ellos, el sistema determinará los objetivos del programa a seguir,
          y se diseñará un programa de tratamientos personalizados y
          específicos.
        </motion.p>
      </div>

      {/* FLEX */}

      <div className="fila">
        {/* UNO */}
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
              Celulitis flacidez, estrías, adiposidades, liposucción sin cirugía
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
              Tratamientos corporales
            </motion.h3>

            <ul>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
              >
                {" "}
                <div className="green-line"></div>
                Adelgazar y afinar la figura
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
              >
                <div className="green-line"></div>
                Reducir y Disolver adiposidades localizadas
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                <div className="green-line"></div>
                Disminuir la celulitis
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                <div className="green-line"></div>
                Tonificar piernas, glúteos, abdomen y brazos
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.7 },
                }}
              >
                <div className="green-line"></div>
                Mejorar tu piel
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.8 },
                }}
              >
                <div className="green-line"></div>
                Depurar el organismo
              </motion.li>
            </ul>

            <motion.h4
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.5 },
              }}
            >
              Tenología
            </motion.h4>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.6 },
              }}
            >
              Velashape, Criolipólisis, Mio UP ondas magnéticas de tonificación,
              Drenaje linfatico con UBF, Presoterápia de piernas, Endermología,
              Ultracavitación, Lipolaser, HIFU.
            </motion.p>
            <motion.a
              href="#contacto"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.7 },
              }}
              className="continuar"
            >
              Consultar ahora!
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="imagen"
          >
            <div className="imagen-zoom">
              <motion.img
                className="trat-corp"
                initial={{ scale: 1.2 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 3, ease: [1, 1, 1, 1] },
                }}
                viewport={{ once: true }}
                src={tratamientoCorp}
              />
            </div>
          </motion.div>
        </div>

        {/* DOS */}

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
                src={tratfaci}
              />
            </div>
          </motion.div>

          <div className="texto bg-light">
            <motion.label
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              Arrugas, manchas, acné, poros dilatados, rejuvenecimiento,
              tonificación.
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
              Tratamientos faciales
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
              Logramos detener el paso del tiempo y revertir signos del
              envejecimiento.
            </motion.p>

            <ul>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
              >
                <div className="green-line"></div>
                Aumento de brillo y tersura
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                <div className="green-line"></div>
                Aumento de tonicidad
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                <div className="green-line"></div>
                Disminuir surcos
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.7 },
                }}
              >
                <div className="green-line"></div>
                Eliminar las arrugas finas
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.8 },
                }}
              >
                <div className="green-line"></div>
                Corrección de signos de envejecimiento
              </motion.li>
            </ul>

            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.6 },
              }}
            >
              Combinación de técnicas y tecnología según cada caso en
              particular: HIFU, luz pulsada intensa (IPL) radiofrecuencia
              unipolar, bipolar y tripolar, laser, oxigenésis, puntas de
              diamante, tonificación por UBF, limpiezas profundas, peeling
              reafirmantes, despigmentantes, máscaras acorde al tipo de piel.
            </motion.p>
            <motion.a
              href="#contacto"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.7 },
              }}
              className="continuar"
            >
              Consultar ahora!
            </motion.a>
          </div>
        </div>

        {/* TRES */}
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
              Tratamiento de tensado de la piel
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
              Lifting Estético sin Cirugía
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
              Sistema Uthera HIFU Tratamiento reafirmante y tensor. Genera nuevo
              colágeno, produciendo una retracción de la piel, disminución de
              papada y elevación de parpados. Se basa en los ultrasonidos que,
              gracias a una nueva y revolucionaria maquinaria, consiguen actuar
              en la musculatura de la cara.
            </motion.p>

            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
            >
              No es específica para el tratamiento de las arrugas pero está
              indicada para quien necesita rejuvenecer reafirmar la estructura
              de la cara y del cuello en una sola sesión.
            </motion.p>
            <motion.a
              href="#contacto"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.5 },
              }}
              className="continuar"
            >
              Consultar ahora!
            </motion.a>
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
                src={lifting}
              />
            </div>
          </motion.div>
        </div>

        {/* CUATRO */}

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
                src={depdef}
              />
            </div>
          </motion.div>
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
              OPT SHR tecnología Soprano
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
              Depilación definitiva
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
              La última tecnología en depilación para hombres y mujeres de todas
              las edades . Utilizable para espalda, brazos, piernas, cara y
              cualquier otra parte del cuerpo en la que se desee eliminar el
              vello de manera permanente.
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
            >
              También contamos con sistema E`light, Luz pulsada intensa y
              Radiofrecuencia para:
            </motion.p>

            <ul>
              <motion.li
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <div className="green-line"></div>
                Rejuvenecimiento de la piel.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              >
                <div className="green-line"></div>
                Activación de colágeno.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.7 },
                }}
              >
                <div className="green-line"></div>
                Reducción de poros dilatados, manchas de pigmentación, acné.
              </motion.li>
            </ul>

            <motion.a
              href="#contacto"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.8 },
              }}
              className="continuar"
            >
              Consultar ahora!
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TratamientosTexto;
