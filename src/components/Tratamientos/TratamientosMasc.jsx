import React, { useRef } from "react";
import { motion } from "framer-motion";

function TratamientosMasc() {
  const corporal = useRef("");
  const facial = useRef("");
  const depilacion = useRef("");

  const botonCorporal = useRef("");
  const botonDepilacion = useRef("");
  const botonFacial = useRef("");

  const Corporal = () => {
    console.log(corporal.current.className);
    corporal.current.className = "d-block, corporales";
    facial.current.className = "d-none";
    depilacion.current.className = "d-none";
    botonCorporal.current.className = "selected";
    botonDepilacion.current.className = "";
    botonFacial.current.className = "";
  };
  const Depilacion = () => {
    corporal.current.className = "d-none";
    facial.current.className = "d-none";
    depilacion.current.className = "d-block, depilacion";
    botonCorporal.current.className = "";
    botonDepilacion.current.className = "selected";
    botonFacial.current.className = "";
  };
  const Facial = () => {
    corporal.current.className = "d-none";
    facial.current.className = "d-block, facial";
    depilacion.current.className = "d-none";
    botonCorporal.current.className = "";
    botonDepilacion.current.className = "";
    botonFacial.current.className = "selected";
  };

  return (
    <div className="tratamientosMasc-container">
      <div className="container-fluid">
        <div className="titulos">
          <motion.h1
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0 },
            }}
          >
            Tratamientos masculinos
          </motion.h1>
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
            Programa de tratamientos estéticos exclusivos, diseñados y
            personalizados para las necesidades del hombre.
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
            La Medicina Estética para hombres permite mantener un aspecto joven
            y cuidado sin la necesidad de pasar el quirófano, teniendo en cuenta
            la especificidad de la anatomía y rasgos masculinos. Evidentemente
            las técnicas se desarrollan individualizadas
          </motion.p>
        </div>

        {/* BOTONES */}

        <div className="botones ">
          <button className="selected" ref={botonCorporal} onClick={Corporal}>
            Corporales
          </button>
          <button ref={botonDepilacion} onClick={Depilacion}>
            Depilación definitiva
          </button>
          <button ref={botonFacial} onClick={Facial}>
            Faciales
          </button>
        </div>

        {/* Corporales */}

        <div ref={corporal} className="corporales">
          <div className="left">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
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
                transition: { duration: 0.5, delay: 0.2 },
              }}
              className="gris"
            >
              A través de un diagnóstico computarizado determinamos el
              tratamiento acorde a cada caso en particular.
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
              El tratamiento adelgazante para reducir el contorno corporal está
              destinado a la grasa que se deposita en las zonas comunes del
              cuerpo masculino, abdomen y flancos (flotadores).
            </motion.p>
            <motion.a
              href="#contacto"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.6 },
              }}
              className="continuar"
            >
              Consultar ahora!
            </motion.a>
          </div>
          <div className="right">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              Lo hacemos a través de la combinación de tecnología como
            </motion.h3>
            <ul>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                <div className="green-line"></div>Velashape V10
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
              >
                <div className="green-line"></div>Criolipólisis
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
                <div className="green-line"></div>Mio Up ondas magnéticas
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
                <div className="green-line"></div>Mesoterapia sin agujas
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
                <div className="green-line"></div>Electrofitness
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
                <div className="green-line"></div>Bandas Térmicas
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
                <div className="green-line"></div>Radiofrecuencia
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.9 },
                }}
              >
                <div className="green-line"></div>Endermología
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 1 },
                }}
              >
                <div className="green-line"></div>Láser Lipólisis
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Depilación */}

        <div ref={depilacion} className="depilacion d-none">
          <div className="left">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              Depilación Definitiva
            </motion.h3>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1 },
              }}
              className="gris"
            >
              La última tecnología en depilación para hombres y mujeres de todas
              las edades . Utilizable para espalda, brazos, piernas, cara y
              cualquier otra parte del cuerpo en la que se desee eliminar el
              vello de manera permanente.
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
              Características del tratamiento
            </motion.h4>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
              La depilación masculina, se basa en el mismo principio que la
              femenina: la fotodepilación. El objetivo del procedimiento de
              depilación láser es la atrofia del bulbo piloso con la conversión
              de la energía lumínica en energía térmica. El calentamiento que
              produce la luz láser sobre las fibras de colágeno determina sesión
              a sesión el mejoramiento de la superficie cutánea a depilar.
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
              El tratamiento se realiza mediante la aplicación de un haz de luz
              intenso que neutraliza la raíz del vello. Con su progresiva
              aplicación a lo largo de las sesiones, se logra disminuir la
              intensidad de crecimiento del vello o bien, eliminarlo totalmente
              según sea el caso y las pretensiones del paciente.
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
          <div className="right">
            <motion.h4
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              El tratamiento es
            </motion.h4>
            <ul>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0 } }}
              >
                <div className="green-line"></div>Indoloro y muy confortable
                para el paciente.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
              >
                <div className="green-line"></div>Gracias a su tecnología SHR
                aumenta la temperatura en forma gradual eliminando el vello en
                forma segura y sin dejar áreas sin tratar.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
              >
                <div className="green-line"></div>Elimina el vello de manera
                rápida, por eso da excelentes resultados en pocas sesiones.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
              >
                <div className="green-line"></div>Es seguro y efectivo ya que no
                necesita sistemas de enfriamiento extra.
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Facial */}

        <div ref={facial} className="facial d-none">
          <div className="left">
            <motion.h3
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              Faciales
            </motion.h3>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1 },
              }}
              className="gris"
            >
              Los factores que afectan de manera negativa a la piel masculina
              son la edad, el cansancio y el estrés, la contaminación, la dieta
              desequilibrada, los problemas de salud, no hacer ejercicio físico,
              fumar y consumir alcohol. Son los mismos que afectan a la piel
              femenina, sin embargo, inciden de manera diferente en los hombres.
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
              ¿Qué se hacen los hombres?
            </motion.h4>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
            >
              Su piel es diferente a la de las mujeres y merece sus propios
              tratamientos estéticos y cremas. Cada vez hay más productos
              especialmente pensados para hombres.
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
              La piel masculina es más gruesa, más rugosa y tiene el doble de
              secreciones sebáceas que la de la mujer, por lo que envejece de
              manera diferente y debe ser tratada con cosméticos y tratamientos
              diferentes. Además la piel de ellos se enfrenta a distintos
              problemas a los de las mujeres como son los continuos afeitados
              que irritan y deshidratan la epidermis. Al ser una piel más gruesa
              y grasa es más frecuente la aparición de acné.
            </motion.p>
            <motion.h4
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.5 },
              }}
            >
              {" "}
              Tratamientos Recomendados
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
              En EVO Estética y Spa utilizamos técnicas más avanzadas para
              mejorar, la piel, disminuir las arrugas y darle más firmeza al
              rostro consiguiendo los mejores resultados naturales. Utilizamos
              productos y aparatología de última generación y máxima calidad.
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
          <div className="right">
            <motion.h4
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              Nuestro sistema incluye
            </motion.h4>
            <ul>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0 } }}
              >
                <div className="green-line"></div>Técnicas de limpieza.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
              >
                <div className="green-line"></div>Limpieza Profunda con
                Dermoabrasión.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
              >
                <div className="green-line"></div>Oxigenésis que es la
                penetración de oxígeno puro y principios activos.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
              >
                <div className="green-line"></div>Reafirmante Facial con
                Radiofrecuencia.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
              >
                <div className="green-line"></div>Foliculitis (Vello Encarnado
                en Rostro).
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
              >
                <div className="green-line"></div>Acné.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
              >
                <div className="green-line"></div>Pieles Engrosadas y Poros
                Dilatados con Ácidos y Dermoabrasión.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.7 } }}
              >
                <div className="green-line"></div>Peeling Químicos y/o Mecánicos
                con Dermoabrasión.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 1.6 } }}
              >
                <div className="green-line"></div>Luz pulsada intensa para
                rejuvenecimiento, manchas y acné.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 1.8 } }}
              >
                <div className="green-line"></div>Sistema HIFU de lifting sin
                cirugía a través de ondas ultrasónicas de alta potencia
                microfocalizadas llegando a la fascia muscular.
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TratamientosMasc;
