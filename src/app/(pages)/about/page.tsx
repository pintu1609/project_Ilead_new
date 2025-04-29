'use client';
import React from 'react';
import Image from 'next/image';

import { ClipboardDocumentIcon, CommandLineIcon, ChartBarIcon, MegaphoneIcon, UserGroupIcon, GlobeAltIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Inclusive Leadership',
    icon: <UserGroupIcon className="h-10 w-10 text-indigo-600" />,
    description:
      'We intentionally engage individuals from marginalized or underrepresented communities, helping shape a more equitable leadership ecosystem.',
  },
  {
    title: 'Mentor-Driven Growth',
    icon: <GlobeAltIcon className="h-10 w-10 text-indigo-600" />,
    description:
      'Our programs are built on structured mentorship, peer learning, and exposure to leaders across public, private, and social sectors.',
  },
  {
    title: 'Mission-Aligned, Impact-Focused',
    icon: <AdjustmentsHorizontalIcon className="h-10 w-10 text-indigo-600" />,
    description:
      'Every initiative we design is aimed at developing value-based, socially aware leaders equipped to take on tomorrow’s challenges.',
  },
  {
    title: 'Platform for Dialogue & Policy',
    icon: <MegaphoneIcon className="h-10 w-10 text-indigo-600" />,
    description:
      'We don’t just empower individuals—we amplify ideas that shape policy and drive change across systems.',
  },
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
            <h3 className="text-indigo-600 text-xl font-semibold mt-2">Our Vision            </h3>
            <p className="text-gray-600 mt-4">
              To create a world where every aspiring changemaker has access to mentorship, opportunity, and a platform to lead.
            </p>
            <h3 className="text-indigo-600 text-xl font-semibold mt-2">Our Mission</h3>
            <p className="text-gray-600 mt-4">
              To identify, nurture, and empower youth—especially those underrepresented in traditional leadership spaces—through structured mentorship, inclusive dialogue, and leadership development programs.
            </p>
            <a href="/" className="inline-flex items-center text-indigo-600 mt-6 font-medium hover:underline">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="flex justify-center flex-col gap-6">

            <h2 className="text-4xl font-bold mt-2">Why ILead?</h2>
            <p className='text-gray-600'>Because leadership must reflect the voices of all.
            </p>
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
          <li><strong>Connect:</strong> Connect aspiring leaders with mentors, experts, and changemakers across sectors.</li>
          <li><strong>Nurture:</strong> Nurture potential through guidance, exposure visits, community-building, and shared learning.
          </li>
          <li><strong>Develop:</strong> Develop future-ready leaders committed to social equity, innovation, and ethical governance.</li>
        </ul>

        {/* What We Do Section */}
<h3 className="text-3xl font-semibold mt-16">What We Do</h3>
<p className="mt-4 text-lg text-[#848484]">
  Through our flagship programs—<strong>Celebrating New India, ILead Women,</strong> and <strong>Rising Leaders</strong>—we offer:
</p>
<ul className="list-disc list-inside mt-4 text-lg text-[#848484] space-y-2">
  <li>Structured mentorship for youth and women leaders</li>
  <li>Platforms for public dialogue on democratic and cultural values</li>
  <li>Training and capacity-building workshops</li>
  <li>Exposure visits, roundtables, and peer engagement forums</li>
  <li>A growing digital ecosystem for learning, sharing, and collaboration</li>
</ul>
<p className="mt-4 text-lg text-[#848484]">
  We strive to create an ecosystem where young minds can grow, lead, and inspire. Whether it&apos;s a student leader, a young activist, or an emerging entrepreneur, ILead offers the tools and network to turn purpose into action.
</p>

{/* Updated Core Pillars Section */}
<h3 className="text-3xl font-semibold mt-16">Our Core Pillars</h3>
<p className="mt-4 text-lg text-[#848484]">
  The foundation of everything we do rests on three interconnected principles:
</p>
<ul className="list-disc list-inside mt-4 text-lg text-[#848484] space-y-2">
  <li><strong>Mentorship with Purpose:</strong> We connect young individuals with seasoned leaders across sectors to share knowledge, experience, and strategic guidance.</li>
  <li><strong>Inclusive Leadership:</strong> We create opportunities for those excluded from conventional leadership spaces, focusing on representation, gender parity, and social equity.</li>
  <li><strong>Dialogue-Driven Development:</strong> Through focused conversations, roundtables, and thought leadership, we promote critical thinking, empathy, and civic participation.</li>
</ul>


        <h3 className="text-3xl font-semibold mt-10">Our Impact</h3>
        <p className="mt-4 text-lg text-[#848484]">
          We&apos;re proud of the growing momentum our programs have generated:
        </p>
        <ul className="list-disc list-inside mt-4 text-lg text-[#848484] space-y-2">
          <li>📍 100+ Youth Leaders Mentored through immersive training</li>
          <li>🌍 Pan-India and Global Reach with international collaborators and events</li>
          <li>👩‍🎓 Women Mentorship Circles impacting leadership trajectories across fields</li>
          <li>🧭 Three Flagship Programs with real-world exposure and public engagement</li>
          <li>📑 Policy Inputs & Whitepapers generated from ground-level dialogues and surveys</li>
          <li>🤝 Partnerships with ministries, think tanks, global NGOs, and academic institutions</li>
        </ul>

        {/* <h3 className="text-3xl font-semibold mt-10">Our Core Pillars</h3> */}
        {/* <div className="mt-6 grid md:grid-cols-3 gap-6"> */}
          {/* Mentorship Card */}
          {/* <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
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
          </div> */}

          {/* Networking and Support Card */}
          {/* <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
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
          </div> */}

          {/* Incubation Center Card */}
          {/* <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
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
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}
