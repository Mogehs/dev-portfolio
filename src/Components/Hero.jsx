"use client";
import React, { useEffect, useRef, useState } from "react";

import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  const [xClient, setXClient] = useState(0);
  const [yClient, setYClient] = useState(0);
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    const changeMouse = (event) => {
      setXClient(event.clientX);
      setYClient(event.clientY);
    };

    window.addEventListener("mousemove", changeMouse);
  }, [xClient, yClient]);

  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/Mughees_UR Rehman_Resume.pdf";
    link.download = "Mughees_Resume.pdf";
    link.click();
  };

  return (
    <div className="pb-20 pt-36 relative">
      <motion.div
        className="bg-purple h-[1.8rem] w-[1.8rem] rounded-full absolute md:inline hidden z-50 -top-10 -left-2 text-black-100 text-sm whitespace-nowrap font-semibold"
        style={
          enter && {
            radius: "10px",
            height: "3rem",
            width: "17rem",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.5s",
          }
        }
        animate={{
          x: xClient,
          y: yClient,
        }}
        transition={{ duration: 0.5 }}
      >
        {enter && "Let's have a look on my resume..!"}
      </motion.div>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center cursor-auto">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center  relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="tracking-widest uppercase text-xs text-center text-blue-100 max-w-80">
            Start Dynamic Web Magic With Me
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts Into Seamless User Exprience"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi I&apos;m Mughees, A MERN Stack Developer
          </p>
          <div
            onMouseEnter={() => {
              setEnter(true);
            }}
            onMouseLeave={() => {
              setEnter(false);
            }}
          >
            <MagicButton
              title={"Download My Resume"}
              icon={<FaLocationArrow />}
              position={"right"}
              otherClasses={"gap-2"}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
