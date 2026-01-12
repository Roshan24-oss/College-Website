import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-amber-100 mt-20 px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo and description */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <img src="/logoncmt.png" alt="logo" className="mb-4" />
          <p>
            NCMT College is conveniently located at <br />
            Ranibari Marg, Samakhusi, just 200 meters <br />
            from the Ringroad. It offers easy access to <br />
            public transportation from any route, providing <br />
            a peaceful and conducive learning environment.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="mb-4 text-lg font-semibold">STAY CONNECTED</h3>
          <span className="flex items-center gap-2 mb-2"><FaInstagram /> Instagram</span>
          <span className="flex items-center gap-2 mb-2"><FaFacebook /> Facebook</span>
          <span className="flex items-center gap-2 mb-2"><AiFillTikTok /> TikTok</span>
          <span className="flex items-center gap-2 mb-2"><FaYoutube /> YouTube</span>
          <span className="flex items-center gap-2 mb-2"><FaLinkedin /> Linkedin</span>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="mb-4 text-lg font-semibold">NAVIGATION</h3>
          <div className="flex flex-col gap-1">
            <span>Home</span>
            <span>About</span>
            <span>Academic</span>
            <span>Committee</span>
            <span>Our Team</span>
            <span>Events</span>
            <span>Gallery</span>
            <span>Blog</span>
            <span>Contact</span>
            <span>Admissions</span>
            <span>Members</span>
            <span>Book Online</span>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="mb-4 text-lg font-semibold">GET IN TOUCH</h3>
          <span className="flex items-center gap-2 mb-2"><IoLocationSharp /> Address: Samakhusi, Ranibari Marg-03, Kathmandu</span>
          <span className="flex items-center gap-2 mb-2"><FaPhoneAlt /> 01-552685425 / 5289645665 / 624565554</span>
          <span className="flex items-center gap-2 mb-2"><MdEmail /> Email: info@ncmt.edu.np <br /> Alt Domain: ncmt.edu.np</span>
        </div>
      </div>

      <footer className="text-center mt-10 border-t border-amber-300 pt-4 text-sm">
        Copyright © 2023 NCMT College. All Rights Reserved.
      </footer>
    </div>
  )
}

export default Footer;
