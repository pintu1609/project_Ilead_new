'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import style from './homeimage.module.css';
import Homedetails from './components/homedetails/page';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsPlayCircle } from "react-icons/bs";


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
      {/* Hero Section */}
      <section id="hero" className={`${style.hero} relative`}>
        {/* Image Container */}
        <div className={`${style['hero-img']} relative w-full h-[80vh] overflow-hidden`}>
          <Image
            src="/img/home.png"
            alt="Hero"
            fill
            priority
            className=" rounded-lg opacity-90 "
          />
        </div>

        {/* Hero Text Overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center z-1000"
          data-aos="fade-in"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#2e3a59]">
           <span className="border-b-4 border-[var(--accent-color)] text-[var(--accent-color)]">  Welcome to ILead Global Foundation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl">
            Empowering leaders, fostering innovation, and driving social transformation for a better tomorrow.
          </p>
          <div className="flex mt-6 gap-4 flex-wrap justify-center ">
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
