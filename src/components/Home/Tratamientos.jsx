import Corp from "../../image/Tratamiento-Corporal.jpg";
import Facial from "../../image/trat-facial.jpg";
import lifting from "../../image/Lifting-estetico.jpg";
import depilacion from "../../image/dep-def.jpg";
import tramasc from "../../image/spa-masc.jpg";
import diagnostico from "../../image/diag-comp.jpg";
import { motion } from "framer-motion";

import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="tratamientos-container">
        <div className="texto container">
          <motion.h3
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0 },
            }}
          >
            Tratamientos
          </motion.h3>
          <motion.div
            viewport={{ once: true }}
            initial={{ width: 5 }}
            whileInView={{
              width: 60,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className="line"
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
            Los mejores cuidados para tu cuerpo.
          </motion.p>
          <motion.a
            href="/tratamientos"
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className="continuar"
          >
            Continuar leyendo...
          </motion.a>
        </div>

        {/* SLIDER */}

        <Slider {...settings} className="slider">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-container"
          >
            <img src={Corp} />
            <h4>Tratamientos corporales</h4>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-container"
          >
            <img src={Facial} />
            <h4>Tratamiento faciales</h4>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-container"
          >
            <img src={lifting} />
            <h4>Lifting estético sin cirugía</h4>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-container"
          >
            <img src={depilacion} />
            <h4>Depilación definitiva</h4>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-container"
          >
            <img src={tramasc} />
            <h4>Tratamientos masculinos</h4>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-container"
          >
            <img src={diagnostico} />
            <h4>Diagnóstico computarizado</h4>
          </motion.div>
        </Slider>
      </div>
    );
  }
}
