import React from 'react';
import YouTube from 'react-youtube';

// Define VIDEO_ID and playerOptions outside of the main component 
// for cleaner code, as they are constant configuration values.
const VIDEO_ID = '9P5gAq0lk4I';

const playerOptions = {
  // We set width/height to 100% to fill the responsive container
  width: '100%',
  height: '100%',
  playerVars: {
    autoplay: 0,        // Start paused (0)
    controls: 1,        // Show video controls
    modestbranding: 1,  // Remove the YouTube logo from the controls bar
    rel: 0,             // Do not show related videos from other channels
  },
};

const HomePage = () => {
  return (
    // main div: Removed h-screen to allow content to dictate height
    <div className='w-full'> 

      {/* 1. Navigation Bar */}
      <div className='w-full h-20 flex flex-row items-center justify-between space-x-5 sm:px-10 lg:px-40 text-md font-semibold border-b'>
        {/* Adjusted image class for better sizing and responsiveness */}
        <img 
          src="/logoncmt.png" 
          alt="logo" 
          className='w-auto h-12 mt-6 object-contain' 
          style={{ imageRendering: 'crisp-edges' }} 
        /><div/>
        
        
        {/* Placeholder for menu items - You will likely make this responsive later */}
        <div className="hidden lg:flex space-x-16">
          <span>Home</span>
          <span>About</span>
          <span>Academics</span>
          <span>Committee</span>
          <span>Our Team</span>
          <span>Event</span>
          <span>Gallery</span>
          <span>Blog</span>
          <span>More</span>
        </div>
      </div>

      {/* 2. Photo Section */}
        <div className='w-full border-amber-100 border-outline-none


            '>

                <img src="/homephoto.jpg" alt="homephoto" className='w-full h-auto border-t-4 border-b-4 border-gray-100'/>





            </div>

      {/* 3. Video and Text Section */}
      {/* Use Tailwind's grid or flex for a two-column layout */}
      <div className='container mx-auto p-8 lg:p-12 flex flex-col lg:flex-row gap-10'>
        
        {/* Text Column (Takes up 1/2 space on large screens) */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-indigo-700">Welcome to College</h1>
          <p className="text-gray-700 leading-relaxed">
            At NCMT College, we are dedicated to fostering an environment where students can achieve excellence in their chosen fields and beyond. With a firm belief in the potential of every individual, we are committed to providing the necessary resources and support for their success.
            <br />
            Diversity is at the heart of our community, and we take pride in creating an inclusive space where all students can flourish and contribute meaningfully to society.
          </p>
        </div>

        {/* Video Column (Takes up 1/2 space on large screens) */}
        <div className="lg:w-1/2">
          
          {/* 🚨 This is the crucial, CORRECTED responsive wrapper for the video 🚨 */}
          {/* relative w-full pt-[56.25%] creates the 16:9 aspect ratio space */}
          <div className="relative w-full pt-[56.25%] shadow-2xl rounded-lg overflow-hidden">
            
            <YouTube 
              videoId={VIDEO_ID} 
              opts={playerOptions}
              // absolute top-0 left-0 w-full h-full makes the player fill the 16:9 box
              className="absolute top-0 left-0 w-full h-full" 
            />
          </div>
        </div>
      </div>

      <div>
        <h1 className='text-4xl font-bold text-orange-900 text-center' >Apply Now</h1>
        <p className='text-l mt-4  text-center'>

Are you ready to embark on a transformative academic journey? Take the first step towards a <br></br> fulfilling career in management or information technology by applying to NCMT today.</p>

<button className='bg-amber-900 text-white font-semibold  px-2 py-2 rounded-lg shadow-lg hover:bg-amber-800 transition duration-300 mt-8 ml-170'>GET STARTED</button>
      </div>
    </div>
    /* main div ends here */   
  );
}

export default HomePage;