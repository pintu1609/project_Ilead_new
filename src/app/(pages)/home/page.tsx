'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import style from './homeimage.module.css';
import Homedetails from './components/homedetails/page';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsPlayCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { Autoplay, EffectFade } from 'swiper/modules';


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col w-full bg-gray-50">

      <section id="hero" className={`${style.hero} relative`}>
        {/* Image Container */}
        <div className={`${style['hero-img']} relative w-full h-[80vh] overflow-hidden`}>
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-[80vh]"
          >
            {['/img/homes.jpeg', '/img/home2.jpeg', '/img/home3.jpeg', '/img/home4.jpeg', '/img/home5.jpeg'].map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className=" rounded-lg opacity-90"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        <div
          className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center z-[10]"
          data-aos="fade-in"
        >
          <div className='bg-black/25 px-4 py-2 rounded flex flex-col justify-center items-center '>
            <h1 className="text-3xl md:text-4xl font-bold text-white max-w-4xl">

              <span className="px-2 rounded ">
                <span className="border-b-4 border-[var(--accent-color)] text-[var(--accent-color)]">
                Empowering Leadership. Inspiring Change. Building Tomorrow.
                </span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white mt-4 max-w-2xl bg-black/10 px-4 py-2 rounded ">
            ILead Global Foundation is a platform committed to nurturing inclusive leadership, enabling personal and professional transformation, and shaping a progressive India.            </p>
          </div>
          <div className="flex mt-6 gap-4 flex-wrap justify-center">
            <a href="#about" className="btn-get-started bg-[#1acc8d] rounded-full py-2 px-4 text-white">
              Get Started
            </a>
            <a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              className="btn-watch-video flex items-center"
            >
              <BsPlayCircle className="w-6 h-6 mr-2 text-[#1acc8d]" />
              <span className="ml-2 text-white">Watch Video</span>
            </a>
          </div>
        </div>


        {/* Waves */}
        <svg className={`${style["hero-waves"]}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className={`${style["wave1"]}`}>
            <use xlinkHref="#wave-path" x="50" y="3" />
          </g>
          <g className={`${style["wave2"]}`}>
            <use xlinkHref="#wave-path" x="50" y="0" />
          </g>
          <g className={`${style["wave3"]}`}>
            <use xlinkHref="#wave-path" x="50" y="9" />
          </g>
        </svg>
      </section>

      {/* Details Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Homedetails />
      </motion.div>
    </div>
  );
};

export default Home;
