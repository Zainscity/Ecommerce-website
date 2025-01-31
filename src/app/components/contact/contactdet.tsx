import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contactdet = () => {
    return (
        <section className="bg-white p-8 text-center text-black">
        <h2 className="text-2xl font-bold mb-4">Get In Touch With Us</h2>
        <p className="text-gray-600 mb-8 opacity-60">For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-10 bg-white max-w-6xl mx-auto">
          {/* Contact Info Section */}
          
            <div className="space-y-20 px-2 text-gray-700 mt-7">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-black w-6 h-6" />
                <p>
                  <strong>Address</strong>
                  <br /> 236 5th SE Avenue, New York <br /> NY10000, United States
                </p>
              </div>
              <div className="space-y-6 flex items-center gap-4">
                <FaPhoneAlt className="text-black w-6 h-6" />
                <p>
                  <strong>Phone</strong>
                  <br /> Mobile: +(84) 546-6789
                  <br /> Hotline: +(84) 456-6789
                </p>
              </div>
              <div className="space-y-6 flex items-center gap-4">
                <FaClock className="text-black w-6 h-6" />
                <p>
                  <strong>Working Time</strong>
                  <br /> Monday–Friday: 9:00 - 22:00
                  <br /> Saturday–Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          
          
          {/* Contact Form Section */}
          <div className="w-full md:w-2/3 p-8 bg-white ">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your name</label>
                <input type="text" placeholder="Enter your name" className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-gray-300" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email address</label>
                <input type="email" placeholder="Enter your email" className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-gray-300" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input type="text" placeholder="This is optional" className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-gray-300" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea placeholder="Write your message..." className="w-full p-4 border rounded-lg h-40 focus:ring-2 focus:ring-gray-300"></textarea>
              </div>
              <button className="w-full py-5 bg-white border border-gray-300 text-black font-bold rounded-lg hover:bg-gray-300 transition-all text-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
        </section>
      );
    };
export default Contactdet;
