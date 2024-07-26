import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto herobackground">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Chris Schack Jr</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I Develop Microsoft Dynamics 365 Customizations,{" "}
            <br className="sm:block hidden" /> Web Applications, and Video Games
          </p>
          <a href="/CSJ_Resume.pdf" download>
            <button
              type="submit"
              className=" relative bg-tertiary mt-5 py-3 px-8 mr-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary rounded border border-purple-500 hover:shadow-lg hover:bg-purple-500"
              style={{ zIndex: "500" }}
            >
              Download My Resume
            </button>
          </a>
          <a href="https://www.linkedin.com/in/chris-schack-jr/">
            <button
              type="button"
              className=" relative  bg-tertiary mt-5 py-3 px-8 rounded-xl outline-none w-fit border text-white font-bold shadow-md shadow-primary rounded border border-blue-500 hover:shadow-lg hover:bg-blue-500"
              style={{ zIndex: "500" }}
            >
              Connect With Me On LinkedIn
            </button>
          </a>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs: bottom-10 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.dev>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
