'use client'; // if you're using the app directory

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import React Icons

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
   

      <section id="contact" className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-left mb-12" data-aos="fade-up">
            <h2 className=" flex items-end text-3xl  font-bold text-gray-800">Contact <hr  className='w-32 h-1 ml-2 mt-2 bg-indigo-600'/></h2>
            <p className="text-lg text-gray-600">
              <span>Check Our </span>
              <span className="text-indigo-600 font-semibold">Contact</span>
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10" data-aos="fade" data-aos-delay="100">
            {/* Info Section */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="200">
                <FaMapMarkerAlt className="text-indigo-600 text-2xl" /> {/* Use React Icon here */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">C-245, 1st Floor, Defence Colony, New Delhi 110024</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="300">
                <FaPhoneAlt className="text-indigo-600 text-2xl" /> {/* Use React Icon here */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">+011-35688106</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4" data-aos="fade-up" data-aos-delay="400">
                <FaEnvelope className="text-indigo-600 text-2xl" /> {/* Use React Icon here */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                ></textarea>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                  >
                    Send Message
                  </button>
                </div>
                {/* Placeholder feedback messages */}
                <div className="text-sm text-center text-gray-500 mt-2">
                  <p className="hidden loading">Loading...</p>
                  <p className="hidden error-message text-red-500">Something went wrong.</p>
                  <p className="hidden sent-message text-green-500">Your message has been sent. Thank you!</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactPage;
