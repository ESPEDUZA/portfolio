import React, { useState, useEffect } from "react";
import { Img, Text } from "components";

const words = ["Blockchains.", "Art.", "Coding.", "Ai.", "Everything."];

const FrameOnePage = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 2000); // Duration should match CSS animation

    return () => clearInterval(intervalId);
  }, []);

  const devItems = ['ART HUNTERS', 'FasTicket', 'Music'];
  const galleryItems = ['Drawing', 'Photos', 'Collected NFT’s'];
  const socialItems = ['Twitter', 'Instagram', 'LinkedIn'];
  
  // Function to render each section with connecting lines
  const renderSection = (title, items, buttonText) => (
    <div className="mb-10">
      <h2 className="text-xl font-medium mb-4">{title}</h2>
      {items.map((item, index) => (
        <div key={index} className="flex items-center content-line text-blue_gray-400">
          <span className="flex-grow text-left">{item}</span>
          <div className="line-spacer"></div>
          <span className="text-right font-thin text-sm">{buttonText}</span>
        </div>
      ))}
    </div>
  );


  return (
    <div className="bg-white-A700 font-inter px-10 py-5 sm:px-5">
      <div className="flex flex-col w-full">
        {/* Header: Profile Image and Name */}
        <div className="mb-12 flex items-center">
          <Img
            className="h-12 w-12 md:h-12 md:w-12 rounded-full"
            src="images/img_image1.png"
            alt="imageOne"
          />
          <Text className="ml-4 md:ml-6">
            <span className="text-xl md:text-xl font-semibold text-black-900">ELIOTT</span>
            <br />
            <span className="text-sm font-light text-blue_gray-400">@esp3duza</span>
          </Text>
        </div>

    {/* Introduction */}
    <div className="mb-10 text-left">
          <Text className="text-2xl font-normal text-gray-500 inline-block">Exploring</Text>
          <div className="inline-block relative word-container">
            {words.map((word, index) => (
              <span key={word} className={`word-animation ${index === currentWordIndex ? 'active' : ''}`}>
                {word}
              </span>
            ))}
          </div>
          <Text className="mt-4 text-m font-thin text-blue_gray-400 block">
            Hello, I'm Eliott, currently an IT student at ESGI Paris. This is my personal sharing platform for my various projects.
          </Text>
          <div className="mt-8 justify-center">
            <span className="h-3 w-3 bg-orange-400 rounded-full inline-block mr-2"></span>
            <Text className="text-sm font-thin text-blue_gray-400 inline-block">
              Currently working at ag2r lamondiale
            </Text>
          </div>
    </div>


    {/* GitHub Link */}
    <div className="mb-10 w-40 justify-center">
      <div className="bg-gray-200 p-2 rounded-md flex items-center pl-6"> {/* Use rounded-md for less radius */}
        <Img
          className="h-6 w-6"
          src="images/img_githubmark1.png"
          alt="githubmarkOne"
        />
        <Text className="ml-2 text-sm font-medium text-black-900">My GITHUB</Text>
      </div>
    </div>



    <div className="font-inter ">
      <div className="flex flex-col">
        {renderSection('Dev', devItems, 'Visit')}
        {renderSection('Galleries', galleryItems, 'View')}
        {renderSection('Social', socialItems, 'Follow')}
      </div>
    </div>
      </div>
    </div>
  );
};

export default FrameOnePage;
