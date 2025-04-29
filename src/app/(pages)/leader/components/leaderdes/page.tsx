"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const leaders = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder & CEO",
    image: "/img/dumby_img.jpeg",
    description: "John Doe is a visionary leader with a passion for social change...",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Director of Leadership Programs",
    image: "/img/dumby_img.jpeg",
    description: "Jane Smith specializes in leadership education and training...",
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Head of Innovation & Research",
    image: "/img/dumby_img.jpeg",
    description: "Michael Johnson is dedicated to fostering innovation in leadership...",
  },
];

const risingLeadersImages = [
  "/img/home.png",
  "/img/ourleader.png",
  "/img/ourinitiative.png",
];

const Leaderdes: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  useEffect(() => {
    const savedIndex = localStorage.getItem("risingImageIndex");
    if (savedIndex) {
      setCurrentImageIndex(parseInt(savedIndex));
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % risingLeadersImages.length;
        localStorage.setItem("risingImageIndex", nextIndex.toString());
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-10">
      <Head>
        <title>Our Leaders - ILead Global Foundation</title>
        <meta
          name="description"
          content="Meet the inspiring leaders of ILead Global Foundation."
        />
      </Head>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-indigo-600 text-4xl font-bold text-center"
      >
        Our Leaders
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 mt-4"
      >
        ILead Global Foundation is proud to have a team of visionary leaders. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur rem nostrum laborum voluptate similique blanditiis cum. Quod, nihil quasi nam adipisci esse similique facilis deserunt non earum, labore vel voluptatem?
      </motion.p>

      <section className="mt-10">
        <h2 className="text-4xl font-bold mt-2 text-center">Rising Leaders 2023–2024</h2>
        <p className="text-gray-600 mt-4">
          ILEAD has successfully conducted two courses of the <strong>Rising Leaders</strong> program...
        </p>

        <Card className="mt-6 shadow-xl rounded-xl flex flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <Image
              src={risingLeadersImages[currentImageIndex]}
              alt="Rising Leaders"
              fill
              style={{ objectFit: "cover" }}
              className="transition duration-1000"
            />
          </div>
          <CardContent className="w-full md:w-1/2 p-6 space-y-4">
            <p className="text-indigo-600 text-xl font-semibold">
              This program, supported by <strong>ONGC</strong>...
            </p>
            <ul className="list-disc ml-5 space-y-1 text-gray-600 mt-4">
              <li>Leadership types and styles</li>
              <li>Leadership in elections</li>
              <li>Effective communication</li>
              <li>Leveraging social media</li>
              <li>Technology in civic outreach</li>
              <li>Campaign design and execution</li>
              <li>Law of Democracy</li>
              <li>International Diplomacy & Relations</li>
            </ul>
            <p className="text-gray-600 mt-4 text-lg">
              This initiative ensures inclusive, progressive change.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-16">
        <h2 className="text-4xl font-bold mt-2 text-center">Meet Our Leaders</h2>
        <p className="text-gray-600 mt-4">
          Our leadership team comprises experts in education, policy-making Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, perferendis, sunt corporis quos atque placeat in quis voluptas quod voluptate animi quae voluptatum enim, impedit provident natus non ducimus veniam!
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <div className="col-lg-4 col-md-6 team" key={leader.id}>
              <div className="member relative">
                <div className="pic overflow-hidden mb-12">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={400}
                    height={300}
                    className="img-fluid"
                  />
                </div>
                <div className="member-info absolute bottom-[-50px] left-5 right-5 bg-white text-[color-mix(in srgb,#444444,transparent%2020%)] shadow-[0px_2px_15px_rgba(0,_0,_0,_0.1)] p-5 overflow-hidden transition-all duration-500 w-4/5">
                  <h4 className="font-bold text-lg relative text-[#040677]">{leader.name}</h4>
                  <hr className="border-[color-mix(in srgb,#444444,transparent%2020%)] my-2 h-[4px] w-1/5" />
                  <div className="flex justify-between items-center">
                    <span className="italic text-sm">{leader.role}</span>
                    <div className="flex gap-3">
                      <a href="#" className="transition-colors duration-300 text-[color-mix(in srgb,var(--default-color),transparent%2070%)] hover:text-accent-color"><FaTwitter /></a>
                      <a href="#" className="transition-colors duration-300 text-[color-mix(in srgb,var(--default-color),transparent%2070%)] hover:text-accent-color"><FaFacebook /></a>
                      <a href="#" className="transition-colors duration-300 text-[color-mix(in srgb,var(--default-color),transparent%2070%)] hover:text-accent-color"><FaInstagram /></a>
                      <a href="#" className="transition-colors duration-300 text-[color-mix(in srgb,var(--default-color),transparent%2070%)] hover:text-accent-color"><FaLinkedin /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-10">
        <div>
          <h2 className="text-4xl font-bold mt-2">The Role of Our Leaders</h2>
          <p className="text-lg text-gray-600 mt-4">
            Our leaders actively engage in mentoring, advocacy, and outreach...
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold mt-2">Join the Leadership Network</h2>
          <p className="text-gray-600 mt-4 text-lg">
            If you&apos;re passionate about leadership and change, join us...
          </p>
        </div>
      </section>
    </div>
  );
};

export default Leaderdes;
