import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const fotter = () => {
  return (
    <div className='grid grid-cols-4 gap-4 bg-amber-100 mt-20'>
        <div className='flex flex-col items-center mt-10 '>
            <img src="/logoncmt.png" alt="logo" />
            <p className='text-justify text-center'>NCMT College is conveniently located at <br /> Ranibari Marg, Samakhusi, just 200 meters <br />from the Ringroad. It offers easy access to <br /> public transportation from any route, providing <br />a peaceful and conducive learning environment</p>
        </div>
        
        
      <div className="mt-10 text-center flex flex-col items-center">
  <h3 className="mb-4">STAY CONNECTED</h3>

  <span className="flex items-center gap-2">
    <FaInstagram /> Instagram
  </span>

  <span className="flex items-center gap-2">
    <FaFacebook /> Facebook
  </span>

  <span className="flex items-center gap-2 mr-4.5">
    <AiFillTikTok /> TikTok
  </span>

  <span className="flex items-center gap-2">
    <FaYoutube /> YouTube
  </span>

  <span className="flex items-center gap-2">
    <FaLinkedin /> Linkedin
  </span>
</div>


        <div className='mt-10'><h3>NAVIGATION</h3>
        <span>Home</span>
      <span>About</span>
      <span>Academic</span>
      <span>Committe</span>
      <span>Our Team</span>
      <span>Events</span>
      <span>Gallery</span>
      <span>Blog</span>
      <span>Contact</span>
      <span>Admissions</span>
      <span>Members</span>
      <span>Book Online</span>
        </div>


        
        <div className='mt-10'><h3>GET IN TOUCH</h3>
        <span><IoLocationSharp /> Address: Samakhusi, Ranibari Marg-03, Kathmandu</span>
        <span><FaPhoneAlt /> 01-552685425/5289645665/624565554</span>
        <span><MdEmail /> Email:info@ncmt.edu.np <br />Alt.Dimain:ncmt.edu.np</span>
        </div>

        <footer>Copyright © 2023 NCMT College. All Rights Reserved. </footer>
      
    </div>
  )
}

export default fotter
