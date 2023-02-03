import React from "react";
import { motion } from "framer-motion";
import ElectroFitness1 from "../../image/electrofitness1.jpg";
import ElectroFitness2 from "../../image/electrofitness2.jpg";

export default function ElectroFitnessTexto() {
  return (
    <div className="electro-fitness-texto ">
      {/* GRILLA */}

      <div className="grilla">
        <div className="grilla-container">
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
              Electrofitness
            </motion.label>
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1 },
              }}
            >
              ¿Qué es?
            </motion.h3>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              Se trata de un equipo de uso profesional que emite impulsos
              eléctricos y que dependiendo de aquellos parámetros que se
              establezcan de frecuencia, como tipo de onda o profundidad,
              produce el desarrollo y fortalecimiento de la musculatura. La
              combinación de estos impulsos localizados y la rutina de
              entrenamiento físico permiten lograr resultados como aumentar la
              masa muscular, adelgazar, elevar glúteos, tonificar el cuerpo,
              fortalecer abdomen y el suelo pélvico o tratar algunos dolores.
            </motion.p>
            <motion.h4
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
              Es el ejercicio más eficaz para perder peso y tonificar los
              músculos
            </motion.h4>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
            >
              Esta técnica -completamente indolora y apta para cualquier persona
              que desee perder peso y ganar masa muscular, independientemente de
              su edad y su condición física- es la mejor manera de hacer
              ejercicio incluso cuando este se encuentra muy lejos de formar
              parte de tus hobbies. Y, si se practica de forma correcta, no
              tiene riesgo alguno. «No son descargas eléctricas, se trata de
              impulsos que provocan contracciones musculares involuntarias. Por
              ello, si se trabaja adecuadamente, es imposible que cause ningún
              daño».
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.5 },
              }}
            >
              El resultado óptimo solo se alcanza cuando se realiza un
              entrenamiento específicamente diseñado por un profesional, en
              sesiones de 20 a 25 minutos combinadas con la práctica de un
              deporte cardiovascular o algún entrenamiento de fuerza.
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.6 },
              }}
            >
              No se debe practicar a diario, porque entre sesión y sesión es
              necesaria una recuperación de unas 48 horas para que al músculo le
              dé tiempo a descansar y evitar lesiones por una posible sobre
              exigencia muscular.
            </motion.p>
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.7 },
              }}
            >
              El electrofitness produce cambios metabólicos, drena el sistema
              linfático y quema calorías
            </motion.h3>
          </div>
          <div className="imagen">
            <motion.img
              initial={{ scale: 1.3 }}
              viewport={{ once: true }}
              whileInView={{
                scale: 1,
                transition: { duration: 10, ease: [1, 1, 1, 1] },
              }}
              src={ElectroFitness1}
            />
          </div>
        </div>

        <div className="grilla-container">
          <div className="imagen">
            <motion.img
              initial={{ scale: 1.3 }}
              viewport={{ once: true }}
              whileInView={{
                scale: 1,
                transition: { duration: 10, ease: [1, 1, 1, 1] },
              }}
              src={ElectroFitness2}
            />
          </div>
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
              ¿Para quién está indicado?
            </motion.h3>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1 },
              }}
            >
              La electroestimulación está indicada para cualquier edad y sexo.
              Aunque el tipo de electroestimulación aplicada dependerá siempre
              de las necesidades y objetivos del cliente así como de su
              condición física o patologías subyacentes, que es lo primero que
              valoramos en la entrevista profesional.
            </motion.p>
            <motion.h4
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
            >
              ¿En qué sectores está indicado?
            </motion.h4>
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
                <div className="green-line"></div>Alto Rendimiento
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
                <div className="green-line"></div>Fisioterapia
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
                <div className="green-line"></div>Estetica
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
                <div className="green-line"></div>Fitness
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
