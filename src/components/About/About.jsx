import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import myPhoto from '../../assets/ProfileImage/mohit.png';


const About = () => {
  return (
    <section id="about"className="py-16 px-[7vw] lg:px-[20vw] font-sans mt-15 md:mt-28 lg:mt-8" >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 w-[150%] ml-[-25%] px-5">        
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-2 leading-tight">
            Mohit Rawat
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-[#8245ec] flex justify-center md:justify-start">
            <span className="text-white mr-2">I am a</span>
            <ReactTypingEffect
              text={[
                'Frontend Developer',
                'MERN Stack Developer',
                'UI/UX Designer',
              ]}
              speed={90}
              eraseSpeed={50}
              typingDelay={400}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          {/* Paragraph */}
          <p className="text-gray-400 text-base sm:text-lg mt-6 leading-relaxed">
            I am a Frontend developer with hand on experience in 
            building scalable web applications. Skilled in front-end 
            development using React, I specialize in the MERN stack and build 
            seamless digital experiences.
          </p>

          {/* Resume Button */}
          <a
            href="d:\Desktop\Resume(Mohit).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-white font-bold py-3 px-10 rounded-full text-lg 
            transition transform hover:scale-105 hover:shadow-[0_0_20px_#8245ec] 
            bg-gradient-to-r from-[#8245ec] to-[#a855f7]"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[23rem] md:h-[23rem] 
            border-4 border-purple-700 rounded-full shadow-[0_0_20px_#8245ec] bg-cover"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={myPhoto}
              alt="Ranjeet Chauhan"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_25px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
