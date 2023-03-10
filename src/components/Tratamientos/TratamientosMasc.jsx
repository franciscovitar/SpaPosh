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
            Programa de tratamientos est??ticos exclusivos, dise??ados y
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
            La Medicina Est??tica para hombres permite mantener un aspecto joven
            y cuidado sin la necesidad de pasar el quir??fano, teniendo en cuenta
            la especificidad de la anatom??a y rasgos masculinos. Evidentemente
            las t??cnicas se desarrollan individualizadas
          </motion.p>
        </div>

        {/* BOTONES */}

        <div className="botones ">
          <button className="selected" ref={botonCorporal} onClick={Corporal}>
            Corporales
          </button>
          <button ref={botonDepilacion} onClick={Depilacion}>
            Depilaci??n definitiva
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
              A trav??s de un diagn??stico computarizado determinamos el
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
              El tratamiento adelgazante para reducir el contorno corporal est??
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
              Lo hacemos a trav??s de la combinaci??n de tecnolog??a como
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
                <div className="green-line"></div>Criolip??lisis
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
                <div className="green-line"></div>Mio Up ondas magn??ticas
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
                <div className="green-line"></div>Bandas T??rmicas
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
                <div className="green-line"></div>Endermolog??a
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
                <div className="green-line"></div>L??ser Lip??lisis
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Depilaci??n */}

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
              Depilaci??n Definitiva
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
              La ??ltima tecnolog??a en depilaci??n para hombres y mujeres de todas
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
              Caracter??sticas del tratamiento
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
              La depilaci??n masculina, se basa en el mismo principio que la
              femenina: la fotodepilaci??n. El objetivo del procedimiento de
              depilaci??n l??ser es la atrofia del bulbo piloso con la conversi??n
              de la energ??a lum??nica en energ??a t??rmica. El calentamiento que
              produce la luz l??ser sobre las fibras de col??geno determina sesi??n
              a sesi??n el mejoramiento de la superficie cut??nea a depilar.
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
              El tratamiento se realiza mediante la aplicaci??n de un haz de luz
              intenso que neutraliza la ra??z del vello. Con su progresiva
              aplicaci??n a lo largo de las sesiones, se logra disminuir la
              intensidad de crecimiento del vello o bien, eliminarlo totalmente
              seg??n sea el caso y las pretensiones del paciente.
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
                <div className="green-line"></div>Gracias a su tecnolog??a SHR
                aumenta la temperatura en forma gradual eliminando el vello en
                forma segura y sin dejar ??reas sin tratar.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
              >
                <div className="green-line"></div>Elimina el vello de manera
                r??pida, por eso da excelentes resultados en pocas sesiones.
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
              son la edad, el cansancio y el estr??s, la contaminaci??n, la dieta
              desequilibrada, los problemas de salud, no hacer ejercicio f??sico,
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
              ??Qu?? se hacen los hombres?
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
              tratamientos est??ticos y cremas. Cada vez hay m??s productos
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
              La piel masculina es m??s gruesa, m??s rugosa y tiene el doble de
              secreciones seb??ceas que la de la mujer, por lo que envejece de
              manera diferente y debe ser tratada con cosm??ticos y tratamientos
              diferentes. Adem??s la piel de ellos se enfrenta a distintos
              problemas a los de las mujeres como son los continuos afeitados
              que irritan y deshidratan la epidermis. Al ser una piel m??s gruesa
              y grasa es m??s frecuente la aparici??n de acn??.
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
              En EVO Est??tica y Spa utilizamos t??cnicas m??s avanzadas para
              mejorar, la piel, disminuir las arrugas y darle m??s firmeza al
              rostro consiguiendo los mejores resultados naturales. Utilizamos
              productos y aparatolog??a de ??ltima generaci??n y m??xima calidad.
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
                <div className="green-line"></div>T??cnicas de limpieza.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
              >
                <div className="green-line"></div>Limpieza Profunda con
                Dermoabrasi??n.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
              >
                <div className="green-line"></div>Oxigen??sis que es la
                penetraci??n de ox??geno puro y principios activos.
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
                <div className="green-line"></div>Acn??.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
              >
                <div className="green-line"></div>Pieles Engrosadas y Poros
                Dilatados con ??cidos y Dermoabrasi??n.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.7 } }}
              >
                <div className="green-line"></div>Peeling Qu??micos y/o Mec??nicos
                con Dermoabrasi??n.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 1.6 } }}
              >
                <div className="green-line"></div>Luz pulsada intensa para
                rejuvenecimiento, manchas y acn??.
              </motion.li>
              <motion.li
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 1.8 } }}
              >
                <div className="green-line"></div>Sistema HIFU de lifting sin
                cirug??a a trav??s de ondas ultras??nicas de alta potencia
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
