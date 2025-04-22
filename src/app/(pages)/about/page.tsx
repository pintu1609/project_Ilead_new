'use client';
import React from 'react';
import Image from 'next/image';

import { BuildingOfficeIcon, ClipboardDocumentIcon, CommandLineIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Empowering Leaders',
    icon: <BuildingOfficeIcon className="h-10 w-10 text-indigo-600" />,
    description: 'We focus on leadership growth by providing mentorship, training, and hands-on experiences.',
  },
  {
    title: 'Global Impact',
    icon: <ClipboardDocumentIcon className="h-10 w-10 text-indigo-600" />,
    description: 'Our initiatives foster societal change, impacting communities on a national and international level.',
  },
  {
    title: 'Innovative Approach',
    icon: <CommandLineIcon className="h-10 w-10 text-indigo-600" />,
    description: 'We combine modern strategies and technology to shape the future of leadership.',
  },
  // {
  //   title: 'Delares sapiente',
  //   icon: <ChartBarIcon className="h-10 w-10 text-indigo-600" />,
  //   description: 'Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quidem.',
  // },
];

export default function AboutPage() {
  return (
    <section id="about" className="bg-gray-50 py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-indigo-600 text-xl font-semibold">About Us</h3>
            {/* <h2 className="text-4xl font-bold mt-2">Ducimus rerum libero reprehenderit cumque</h2> */}
            <p className="text-gray-600 mt-4">
            Since 2019, ILead Global Foundation has been dedicated to nurturing, developing, and empowering leaders across various fields. Our mission is to equip individuals with the necessary skills, knowledge, and resources to create meaningful change in society. Rooted in mentorship, innovation, and inclusivity, we are committed to fostering leadership that drives transformation and progress.

            </p>
            <h2 className="text-4xl font-bold mt-2">Our Mission & Vision</h2>
            <p className="text-gray-600 mt-4">
            Our mission is to cultivate well-rounded leaders who can navigate modern challenges with confidence and integrity. We strive to create a collaborative platform where individuals from diverse backgrounds can exchange ideas, inspire innovation, and contribute to a better society. 

            </p>
            <p className="text-gray-600 mt-4">
            We envision a world where every aspiring leader has access to mentorship, guidance, and opportunities to excel. Through continuous learning and empowerment, we aim to shape individuals who not only lead but also inspire ethical and responsible change.

            </p>
            <a href="/" className="inline-flex items-center text-indigo-600 mt-6 font-medium hover:underline">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>

          <div className="flex justify-center flex-col gap-6">

          <h2 className="text-4xl font-bold mt-2">Why ILead?</h2>
          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-xl">
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          </div>
        </div>

        <h3 className="text-3xl font-semibold mt-16">Our Approach: Connect, Nurture, Develop</h3>
        <p className="mt-4 text-lg text-[#848484]">
          Our leadership development model is built on three key pillars:
        </p>
        <ul className="list-disc list-inside mt-4 text-lg text-[#848484]">
          <li><strong>Connect:</strong> Uniting leaders, mentors, and experts from diverse fields to foster collaboration and knowledge exchange.</li>
          <li><strong>Nurture:</strong> Offering continuous mentorship, resources, and professional guidance to enable personal and career growth.</li>
          <li><strong>Develop:</strong> Equipping individuals with essential skills and experiences to thrive in their chosen fields and drive positive change.</li>
        </ul>

        <h3 className="text-3xl font-semibold mt-10">Our Impact</h3>
        <p className="mt-4 text-lg text-[#848484]">
          Since our inception, ILead Global Foundation has made significant contributions to leadership and societal development, including:
        </p>
        <ul className="list-disc list-inside mt-4 text-lg text-[#848484]">
          <li>Empowering emerging leaders through structured programs and mentorship.</li>
          <li>Facilitating national and international discussions on policy and societal change.</li>
          <li>Launching impactful initiatives such as Celebrating New India, ILead Women, and Rising Leaders.</li>
          <li>Providing career-transforming mentorship opportunities for aspiring professionals.</li>
        </ul>

        <h3 className="text-3xl font-semibold mt-10">Our Core Pillars</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {/* Mentorship Card */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <Image src='/img/home.png' alt="Mentorship" width={500} height={200} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold">Mentorship</h4>
              <p className="mt-2 text-[#848484]">
                We provide structured mentorship, training, and support to nurture leadership potential.
              </p>
              <p className='mt-2 text-[#848484]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, doloribus! Dolore voluptatem, repellendus nam culpa a dolorem nemo, optio rerum distinctio, libero explicabo! Quis, officia eaque necessitatibus quo impedit eius repellat ullam veniam laborum eum fuga modi tempora consequuntur amet.
              </p>
            </div>
          </div>

          {/* Networking and Support Card */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <Image src='/img/home.png' alt="Networking and Support" width={500} height={200} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold">Networking & Support</h4>
              <p className="mt-2 text-[#848484]">
                We connect professionals with industry leaders, fostering collaboration and career growth.
              </p>
              <p className='mt-2 text-[#848484]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, doloribus! Dolore voluptatem, repellendus nam culpa a dolorem nemo, optio rerum distinctio, libero explicabo! Quis, officia eaque necessitatibus quo impedit eius repellat ullam veniam laborum eum fuga modi tempora consequuntur amet.
              </p>
            </div>
          </div>

          {/* Incubation Center Card */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <Image src='/img/home.png' alt="Incubation Center" width={500} height={200} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold">Incubation Center</h4>
              <p className="mt-2 text-[#848484]">
                Our incubation programs empower aspiring entrepreneurs with resources and guidance.
              </p>
              <p className='mt-2 text-[#848484]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, doloribus! Dolore voluptatem, repellendus nam culpa a dolorem nemo, optio rerum distinctio, libero explicabo! Quis, officia eaque necessitatibus quo impedit eius repellat ullam veniam laborum eum fuga modi tempora consequuntur amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
