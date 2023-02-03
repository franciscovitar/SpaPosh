import React from "react";
import { motion } from "framer-motion";

function TecnologiaText() {
  return (
    <div className="tecnologia-text-container">
      {/* TEXTO */}
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
          Nuevos equipos para mejores resultados
        </motion.h3>
        <motion.div
          viewport={{ once: true }}
          initial={{ width: 5 }}
          whileInView={{ width: 60, transition: { duration: 0.5 } }}
          className="line"
        >
          {" "}
        </motion.div>
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
        >
          Conocé nuestra más sofisticada tecnología, el complemento ideal para
          los más variados tratamientos.
        </motion.p>
      </div>
      <div className="grilla ">
        {/* GRILLA 1 */}

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0 },
          }}
          whileHover={{ y: -10 }}
          className="grilla-2"
        >
          <div className="imagen">
            <h4> Mio UP</h4>
            <div className="overlay">
              <p>
                Mio-Up es un equipo de pulsos electromagnéticos focalizados que
                genera contracciones musculares rápidas e intensas muy por
                encima de lo que el ejercicio físico voluntario puede alcanzar.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.2 },
          }}
          whileHover={{ y: -10 }}
          className="grilla-2"
        >
          <div className="imagen-1">
            <h4>Velashape</h4>
            <div className="overlay">
              <p>
                Combina Radiofrecuencia bipolar, Láser de diodo, roll vac. Para
                el tratamiento de la celulitis, modelación corporal y tensado de
                piel. Se recomienda entre 4 y 6 sesiones cada 15 días.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.4 },
          }}
          whileHover={{ y: -10 }}
          className="grilla-2"
        >
          <div className="imagen-2">
            <h4>Lipolaser</h4>
            <div className="overlay">
              <p>
                Para reducción de grasas localizadas y celulitis Se recomienza
                realizar hasta 8 sesiones de este tratamiento realizadas dos
                veces por semana. De esta manera se conseguirá una remodelación
                corporal completa en cuatro semanas. Sólo debe tratarse un área
                al día con el fin de maximizar la quema de grasa.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.6 },
          }}
          whileHover={{ y: -10 }}
          className="grilla-2"
        >
          <div className="imagen-3">
            <h4>Criolipólisis</h4>
            <div className="overlay">
              <p>
                La Criolipólisis es el método más elegido en el mundo para
                reducir la adiposidad localizada. Se realiza una sesión al mes y
                los resultados son evidentes de una sesión a otra.
              </p>
            </div>
          </div>
        </motion.div>

        {/* GRILLA 2 */}

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.1 },
          }}
          whileHover={{ y: -10 }}
          className="grilla-2"
        >
          <div className="imagen-4">
            <h4>Presoterapia</h4>
            <div className="overlay">
              <p>
                La presoterapia es una técnica médica indicada para lograr un
                drenaje linfático en personas que presentan problemas médicos y
                estéticos, como alteraciones en el sistema circulatorio, piernas
                cansadas, arañitas vasculares, edemas, celulitis y acumulaciones
                de grasa.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.3 },
          }}
          whileHover={{ y: -10 }}
          className="grilla-2"
        >
          <div className="imagen-5">
            <h4>HIFU Corporal</h4>
            <div className="overlay">
              <p>
                Combina ultrasonido focalizado de alta frecuencia, luz
                infrarroja, radiofrecuencia bipolar, mecanismos de succión y
                masaje que permiten la orientación precisa de la energía al
                tejido.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.5 },
          }}
          whileHover={{ y: -10 }}
          className="grilla-2"
        >
          <div className="imagen-6">
            <h4>Ultracavitación</h4>
            <div className="overlay">
              <p>
                Consiste en un tratamiento no invasivo que combate la grasa
                localizada y la celulitis mediante la aplicación de un novedoso
                equipo de nueva generación de Alta Potencia.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.7 },
          }}
          whileHover={{ y: -10 }}
          className="grilla-2"
        >
          <div className="imagen-7">
            <h4>Radiofrecuencia</h4>
            <div className="overlay">
              <p>
                El calentamiento sostenido induce a un aumento metabólico en las
                fibras colágenas por lo que éstas se contraen creando un efecto
                de tonificación (lifting) inmediato. De igual manera, se
                estimula la neo-formación de colágeno, lo que nos reafirma el
                efecto lifting perdurable.
              </p>
            </div>
          </div>
        </motion.div>

        {/* GRILLA 3 */}

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.2 },
          }}
          whileHover={{ y: -10 }}
          className="grilla-2"
        >
          <div className="imagen-8">
            <h4>Linfodren UBF</h4>
            <div className="overlay">
              <p>
                Este tipo de frecuencia (UBF) permite llegar y tratar el sistema
                linfático. A su vez presenta accesorios y funciones que permiten
                realizar tratamientos faciales y corporales.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.4 },
          }}
          whileHover={{ y: -10 }}
          className="grilla-2"
        >
          <div className="imagen-9">
            <h4>Depilación Laser Definitiva</h4>
            <div className="overlay">
              <p>
                La última tecnología en depilación para hombres y mujeres de
                todas las edades SISTEMA OPT SHR Utilizable para espalda,
                brazos, piernas, cara y cualquier otra parte del cuerpo en la
                que se desee eliminar el vello.
              </p>
            </div>
          </div>
        </motion.div>
        {/* </div> */}

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.6 },
          }}
          whileHover={{ y: -10 }}
          className="grilla-2"
        >
          <div className="imagen-10">
            <h4>E-LIGHT (IPL + RF)</h4>
            <div className="overlay">
              <p>
                Esta técnica novedosa que consiste en el empleo de IPL + RF
                (E-LIGHT),que produce calor controlado que entregado a nivel de
                la piel producirá un aumento en la formación de colágeno y
                retracción de tejidos, lo que implica un aumento de luminosidad
                en la piel, atenuación de arrugas y un efecto lifting duradero.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.8 },
          }}
          whileHover={{ y: -10 }}
          className="grilla-2"
        >
          <div className="imagen-11">
            <h4>Ulthera HIFU facial</h4>
            <div className="overlay">
              <p>
                Primer y único tratamiento de ultrasonido focalizado NO
                Quirúrgico aprobado por la FDA para indicaciones de Lifting
                facial (levantamiento de la piel), incluso de la papada.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default TecnologiaText;
