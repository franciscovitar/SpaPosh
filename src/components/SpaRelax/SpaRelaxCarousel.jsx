import React, { Component } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Car1 from "../../image/trat-facial.jpg";
import Car2 from "../../image/Spa-relax-texto.jpg";
import Car3 from "../../image/pexels-andrea-piacquadio-3757942.jpg";
import Car4 from "../../image/TratamientosWLC.jpg";
import Car5 from "../../image/relax.jpg";
import Car6 from "../../image/Lifting-estetico.jpg";
import Car7 from "../../image/tratamiento-Corp.jpg";
import Car8 from "../../image/NosotrosWelcome.jpg";
import Car9 from "../../image/masajista1.jpg";
import Car10 from "../../image/masajista2.jpg";

export default class Responsive extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="relax-carousel-container">
        <Slider {...settings} className="slider">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-carousel"
          >
            <img src={Car1} />
            <p>Limpieza facial</p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-carousel"
          >
            <img src={Car2} />
            <p>Spa relax</p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-carousel"
          >
            <img src={Car3} />
            <p>Spa belleza</p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-carousel"
          >
            <img src={Car4} />
            <p>Facial antiedad</p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-carousel"
          >
            <img src={Car5} />
            <p>Facial flash</p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-carousel"
          >
            <img src={Car6} />
            <p>Bio detox</p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-carousel"
          >
            <img src={Car7} />
            <p>Drenaje linfatico</p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-carousel"
          >
            <img src={Car8} />
            <p>Masajes en cama Syogra</p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-carousel"
          >
            <img src={Car9} />
            <p>Relax masajes</p>
          </motion.div>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8 },
            }}
            whileHover={{ y: -10 }}
            className="slider-carousel"
          >
            <img src={Car10} />
            <p>Masajes manuales</p>
          </motion.div>
        </Slider>
      </div>
    );
  }
}
