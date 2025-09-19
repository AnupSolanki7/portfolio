"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const router = useRouter();
  const navigatePortfolio = () => {
    router.push("/portfolio");
  };
  const navigateContact = () => {
    router.push("/contact");
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/Gemini_Generated_Image_1.png" alt="" fill className="object-contain bg-blend-multiply mix-blend-multiply" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl text-center md:text-left md:text-6xl font-bold">
            Designing Intuitive Solutions, Delivering Excellence.
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-center md:text-left">
          Explore my digital realm, where artful design meets cutting-edge technology. From concept to execution, my work embodies a commitment to creating meaningful and innovative experiences.
          </p>
          {/* BUTTONS */}
          <div className="w-full justify-center md:justify-start flex gap-4">
            <button
              onClick={navigatePortfolio}
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
            >
              View My Work
            </button>
            <button
              onClick={navigateContact}
              className="p-4 rounded-lg ring-1 ring-black"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
