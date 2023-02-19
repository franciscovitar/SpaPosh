import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

function Contacto() {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <div id="contacto" className="contacto-container ">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="container"
      >
        <div className="titulos">
          <h2>Consultanos ahora!</h2>
          <div className="line"></div>
        </div>
        <Formik
          initialValues={{
            nombre: "",
            telefono: "",
            email: "",
            textarea: "",
          }}
          validate={(valores) => {
            let errores = {};

            // Validacion nombre
            if (!valores.nombre) {
              errores.nombre = "Por favor ingresa un nombre";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,20}$/.test(valores.nombre)) {
              errores.nombre =
                "El nombre solo puede contener letras y espacios, no debe tener más de 20 caracteres.";
            }
            // Validacion telefono
            if (!valores.telefono) {
              errores.telefono = "Por favor ingresa un teléfono";
            } else if (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.telefono)) {
              errores.telefono = "El telefono no es válido";
            }
            // Validacion correo
            if (!valores.email) {
              errores.email = "Por favor ingresa un correo electrónico.";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.email
              )
            ) {
              errores.email = "El correo es inválido.";
            }
            //Validacion textarea
            if (!valores.textarea) {
              errores.textarea = "Por favor ingresa tu consulta";
            }

            return errores;
          }}
          onSubmit={async (valores, { resetForm }) => {
            const url = "https://spacenter.website/mail";
            const data = {
              nombre: valores.nombre,
              telefono: valores.telefono,
              correo: valores.email,
              consulta: valores.textarea,
            };

            await axios
              .post(url, data)
              .then(function (response) {
                console.log("success");
              })
              .catch(function (error) {
                console.log(error);
              });
            resetForm();
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000);
          }}
        >
          {({ errors }) => (
            <Form className="formulario">
              <Field
                name="nombre"
                type="text"
                placeholder="Nombre y apellido"
              ></Field>
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
              <Field name="telefono" type="text" placeholder="Teléfono"></Field>
              <ErrorMessage
                name="telefono"
                component={() => <div className="error">{errors.telefono}</div>}
              />
              <Field name="email" type="text" placeholder="Email"></Field>
              <ErrorMessage
                name="email"
                component={() => <div className="error">{errors.email}</div>}
              />
              <Field
                as="textarea"
                name="textarea"
                type="text"
                placeholder="Consultas"
              ></Field>
              <ErrorMessage
                name="textarea"
                component={() => <div className="error">{errors.textarea}</div>}
              />
              <motion.button type="submit" whileHover={{ scale: 1.07 }}>
                Consultar
              </motion.button>
              {formularioEnviado && <p className="exito">Enviado con éxito!</p>}
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
}

export default Contacto;
