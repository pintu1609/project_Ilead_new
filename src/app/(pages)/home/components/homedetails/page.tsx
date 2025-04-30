"use client"
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Testimonial from '../testomonial/page';
import { initiativesData } from '@/dumby/initiatives';

const Homedetails: React.FC = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <Head>
        <title>Home - ILead Global Foundation</title>
        <meta name="description" content="Welcome to ILead Global Foundation, empowering leaders for a better tomorrow." />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="sm:p-10 p-4 "
      >
        <p className="mt-4 text-lg text-[#848484] text-center">
        Welcome to ILead Global Foundation — a movement to cultivate leadership that is inclusive, ethical, and future-ready.
        </p>
        <p className="mt-4 text-lg text-[#848484] text-justify">
        In an age of rapid transformation and rising aspirations, we believe that true progress is driven by empowered individuals. At ILead, we create structured pathways for young leaders—especially those from underrepresented backgrounds—to connect with experienced mentors, develop critical life and leadership skills, and contribute meaningfully to society. Our mission is not just to inspire change, but to build the changemakers themselves.        </p>
        </motion.div>
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="sm:p-10 p-4 text-center"
      >
        <h2 className="flex items-center text-[#040677] text-4xl font-semibold">Who We Are <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
        <Image src="/img/whoweare.jpeg" alt="Who We Are" width={800} height={400} className="w-full mt-4 rounded-lg shadow-md" />
        <p className="mt-4 text-lg text-[#848484] text-justify">
        ILead Global Foundation is a youth-centric, non-profit organization registered in 2019 with a singular vision — to nurture the next generation of inclusive and impactful leaders.        </p>
        <p className="mt-4 text-lg text-[#848484] text-justify">
        Our work is rooted in the belief that leadership should reflect the diversity of society. We focus on empowering young individuals, especially those underrepresented in traditional leadership spaces, by connecting them with mentors, opportunities, and a strong support network.
        </p>
        <p className="mt-4 text-lg text-[#848484] text-justify">
        Through a combination of structured mentorship, experiential learning, and digital engagement, we provide the tools necessary for personal growth, professional development, and civic participation. We believe that when young people are given the right guidance and exposure, they can transform not only their own lives but the communities around them.        </p>
      </motion.div>

      {/* Core Philosophy Section */}
      <motion.div
        className="sm:p-10 p-4 rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className=" flex items-center text-4xl font-semibold text-[#040677] text-left">Our Core Philosophy <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
        <p className="mt-4 text-lg text-[#848484] text-justify">
        Empowering young minds through structured mentorship and inclusive leadership opportunities.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <motion.div whileHover={{ scale: 1.05 }} className=" bg-[#f0f0f0] rounded-lg shadow-md pb-4 ">
            <Image src="/img/connect.jpeg" alt="Connect" width={400} height={400} className="mx-auto w-full rounded-t-lg h-64" />
            <h3 className="text-2xl font-semibold mt-2 text-center">Connect</h3>
            <p className="mt-2 text-[#848484] px-4 pb-2 text-justify text-lg">Bridging ambition with access.</p>
            <p className='text-[#848484] px-4 text-justify text-lg'>We identify promising individuals from diverse and underrepresented communities and connect them with experienced leaders, mentors, and collaborators. This network of support provides the first step toward unlocking confidence, guidance, and opportunity.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className=" bg-[#f0f0f0] rounded-lg shadow-md pb-4 ">
            <Image src="/img/nature.jpeg" alt="Nurture" width={400} height={100} className="w-full mx-auto rounded-t-lg h-64" />
            <h3 className="text-2xl font-semibold mt-2 text-center">Nurture</h3>
            <p className="mt-2 text-[#848484] px-4 pb-2 text-justify text-lg ">Cultivating leadership through shared learning.
            </p>
            <p className='text-[#848484] px-4 text-justify text-lg'>Through personalized mentorship, peer dialogue, and immersive exposure, we help youth build their knowledge, skills, and perspective. This nurturing ecosystem encourages critical thinking, resilience, and collaborative growth.
            </p>

          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-[#f0f0f0] rounded-lg shadow-md pb-4">
            <Image src="/img/develop.jpeg" alt="Develop" width={400} height={100} className="w-full mx-auto rounded-t-lg h-64" />
            <h3 className="text-2xl font-semibold mt-2 text-center">Develop</h3>
            <p className="mt-2 text-[#848484] px-4 pb-2 text-justify text-lg">Shaping the changemakers of tomorrow.
            </p>
            <p className='text-[#848484] px-4 text-justify text-lg'>Our programs are designed to develop socially conscious leaders who can drive positive change in their communities and beyond. We empower them to lead with empathy, innovation, and a sense of responsibility toward inclusive progress.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Initiatives Section */}
      <motion.div
        className="sm:p-10 p-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="flex items-center text-left text-[#040677] text-4xl font-semibold">Our Flagship Initiatives <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
        <p className='mt-4 text-lg text-[#848484] text-justify'>Building inclusive leadership through purpose-driven programs.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6 ">
          {initiativesData.map((initiative, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className=" bg-white rounded-lg shadow-md">
              <Image src={initiative.img} alt={initiative.title} width={400} height={100} className="w-full rounded-t-lg h-64" />
              <h3 className="text-2xl font-semibold mt-4">{initiative.title}</h3>
              <p className='text-[#848484] px-4 pb-2 text-justify text-lg'>{initiative.desc.short}</p>
              <p className='text-[#848484] px-4 text-justify text-lg'>{initiative.desc.full} </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why iLead Section */}
<motion.div
  className="sm:p-10 p-4 text-center mt-10  rounded-lg"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <h2 className="flex items-center text-[#040677] text-4xl font-semibold">Why iLead? <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
  <p className="mt-4 text-lg text-[#848484] italic text-justify">
    Because leadership must be inclusive, intentional, and inspired.
  </p>
  <p className="mt-6 text-lg text-[#848484] text-justify">
    At iLead Global Foundation, we believe that untapped potential exists in every corner of society — it simply needs the right spark. Our programs are designed to bridge the gap between aspiration and opportunity for youth who are often left out of traditional leadership pipelines.
  </p>
  <ul className="list-disc text-left mt-6 pl-6 text-[#848484] space-y-2 text-lg">
    <li>Build confidence and purpose</li>
    <li>Develop real-world leadership skills</li>
    <li>Access opportunities across public, private, and social sectors</li>
    <li>Join a community committed to equitable progress</li>
  </ul>
  <p className="mt-6 text-lg text-[#848484] text-justify">
    We’re not just preparing individuals for leadership roles — we’re nurturing changemakers who will shape the India and the world of tomorrow.
  </p>
</motion.div>


      <div className='sm:p-10 p-4'>
        <Testimonial/>
      </div>

      {/* Call to Action */}
      <motion.div
        className="bg-black text-white py-10 text-center mt-10 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold">Join Us</h2>
        <p className="mt-4 text-lg">Become a part of our leadership movement and shape a better future.</p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link href="/contact" className="mt-6 px-6 py-3 bg-white text-black text-lg font-semibold rounded-full shadow-lg inline-block">
            Get Involved
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Homedetails;