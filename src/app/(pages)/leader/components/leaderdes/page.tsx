"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
// import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


import AOS from "aos";
import "aos/dist/aos.css";
import { leadersItem } from "@/dumby/leaders";



const risingLeadersImages = [
  "/img/risingleader1.jpeg",
  "/img/risingleader2.jpeg",
  "/img/risingleader3.jpeg",
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
        className="flex items-center text-[#040677] text-4xl font-semibold text-left "
      >
        Guiding with Purpose. Leading by Example <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 mt-4 text-justify text-lg"
      >
At the heart of iLead Global Foundation is a community of extraordinary individuals who bring vision, experience, and integrity to our mission. These are the mentors, advisors, and changemakers who not only inspire but actively shape the journeys of young leaders across India and beyond.

</motion.p>
<motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 mt-4 text-justify text-lg"
      >
        Our leaders come from diverse fields—public service, academia, civil society, media, policy, and enterprise—but are united by a shared belief: that leadership must be inclusive, values-driven, and future-ready. Their guidance empowers our youth with critical insights, ethical grounding, and real-world perspective.
</motion.p>




<section className="mt-10">
  <h2 className="text-4xl font-semibold mt-2 flex items-center text-[#040677]">
    Voices that Inspire. Journeys that Lead
    <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" />
  </h2>

  <blockquote className="border-l-4 border-[#040677] italic text-gray-700 text-lg pl-6 mt-6 mb-8 md:w-[max-content]">
  
    “True leaders don’t create followers. They create more leaders.” <br />
    <span className="block mt-2 text-right font-semibold text-[#040677]">— Tom Peters</span>
  </blockquote>

  <div className="grid md:grid-cols-2 gap-8 mt-6">
    {/* Neha Joshi */}
    <motion.div 
      className="bg-white shadow-md p-6 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-end w-full ">
        <Image
          src="/img/dumby_img.jpeg"
          alt="Neha Joshi"
          quality={100}
          width={100}
          height={100}
          className="w-32 h-32 rounded-full"
        />
      </div>
      <h3 className="text-2xl font-bold text-[#040677]">Neha Joshi</h3>
      <p className="text-gray-700 mt-2 text-justify">
        A dynamic and proactive BJP leader from Uttarakhand, Neha Joshi currently serves as the National Vice President of the Bharatiya Janata Yuva Morcha (BJYM). Since 2017, she has also been the National Media Co-in-Charge of BJYM and is a regular face on national television as a media panellist representing the BJP. Her commitment to youth leadership, media strategy, and grassroots engagement has made her a powerful voice in shaping the political narrative among India’s young citizens.
      </p>
    </motion.div>

    {/* Hardeep Singh Puri */}
    <motion.div 
      className="bg-white shadow-md p-6 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-end w-full ">
        <Image
          src="/img/hardeepsingh.jpeg"
          alt="Neha Joshi"
          quality={100}
          width={100}
          height={100}
          className="w-32 h-32 rounded-full"
        />
      </div>
      <h3 className="text-2xl font-bold text-[#040677]">Hardeep Singh Puri</h3>
      <p className="text-gray-700 mt-2 text-justify">
        A respected statesman and global diplomat, Hardeep Singh Puri is the Minister of Petroleum and Natural Gas and a senior leader in the Bharatiya Janata Party. A retired Indian Foreign Service officer, he joined the BJP in 2014 and has since served as a Member of Parliament in the Rajya Sabha. He is internationally recognized for his tenure as Chairman of the United Nations Security Council’s Counter-Terrorism Committee, bringing diplomatic insight and strategic vision to India’s leadership landscape.
      </p>
    </motion.div>
  </div>
</section>

      {/* <section className="mt-10">
        <h2 className="text-4xl font-semibold mt-2 flex items-center text-[#040677]">Rising Leaders 2023–2024 <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
        <p className="text-gray-600 mt-4 text-justify text-lg">
          ILEAD has successfully conducted two courses of the <strong>Rising Leaders</strong> program...
        </p>

        <Card className="mt-6 shadow-xl rounded-xl flex flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <Image
              src={risingLeadersImages[currentImageIndex]}
              alt="Rising Leaders"
              fill
              style={{ objectFit: "fill" }}
              className="transition duration-1000"
            />
          </div>
          <CardContent className="w-full md:w-1/2 p-6 space-y-4">
            <p className="text-indigo-600 text-xl font-semibold">
              This program, supported by <strong>ONGC</strong>...
            </p>
            <ul className="list-disc ml-5 space-y-1 text-gray-600 mt-4 text-lg">
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
      </section> */}

      <section className="mt-16">
        <h2 className="flex items-center text-[#040677] text-4xl font-semibold mt-2 text-left">Meet Our Leaders <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
        <p className="text-gray-600 mt-4 text-justify text-lg">
          Our leadership team comprises experts in education, policy-making Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, perferendis, sunt corporis quos atque placeat in quis voluptas quod voluptate animi quae voluptatum enim, impedit provident natus non ducimus veniam!
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {leadersItem.map((leader, index) => (
            <div className="col-lg-4 col-md-6 team" key={leader.id}>
              <div className="member relative">
                <div className="pic overflow-hidden mb-12">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={400}
                    height={300}
                    className="img-fluid h-[300px] object-fill"
                  />
                </div>
                <div className="member-info absolute bottom-[-50px] left-5 right-5 bg-white text-[color-mix(in srgb,#444444,transparent%2020%)] shadow-[0px_2px_15px_rgba(0,_0,_0,_0.1)] p-5 overflow-hidden transition-all duration-500 w-4/5">
                  <h4 className="font-bold text-lg relative text-[#040677]">{leader.name}</h4>
                  <hr className="border-[color-mix(in srgb,#444444,transparent%2020%)] my-2 h-[4px] w-1/5" />
                  <div className="flex justify-between items-center">
                    <span className="italic text-sm">{leader.role}</span>
                    {/* <div className="flex gap-3">
                      <a href="#" className="transition-colors duration-300 text-[color-mix(in srgb,var(--default-color),transparent%2070%)] hover:text-accent-color"><FaTwitter /></a>
                      <a href="#" className="transition-colors duration-300 text-[color-mix(in srgb,var(--default-color),transparent%2070%)] hover:text-accent-color"><FaFacebook /></a>
                      <a href="#" className="transition-colors duration-300 text-[color-mix(in srgb,var(--default-color),transparent%2070%)] hover:text-accent-color"><FaInstagram /></a>
                      <a href="#" className="transition-colors duration-300 text-[color-mix(in srgb,var(--default-color),transparent%2070%)] hover:text-accent-color"><FaLinkedin /></a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="mt-16 space-y-10">
        <div>
          <h2 className="flex items-center text-[#040677] text-4xl font-semibold mt-2">The Role of Our Leaders <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
          <p className="text-lg text-gray-600 mt-4">
            Our leaders actively engage in mentoring, advocacy, and outreach...
          </p>
        </div>

        <div>
          <h2 className="flex items-center text-[#040677] text-4xl font-semibold mt-2">Join the Leadership Network <hr className="w-32 h-[2px] ml-2 mt-2 bg-[#040677]" /></h2>
          <p className="text-gray-600 mt-4 text-lg">
            If you&apos;re passionate about leadership and change, join us...
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default Leaderdes;
