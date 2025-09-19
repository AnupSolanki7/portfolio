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
        <div className="h-1/2 lg:h-full lg:w-1/2 relative flex items-center justify-center">
          <Image
            src="/Gemini_Generated_Image_1.png"
            alt="Portfolio Hero"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center lg:items-start justify-center text-center lg:text-left">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Designing Intuitive{" "}
            <span className="text-blue-600">Web Experiences</span> <br />
            Digital Experiences that Last
          </h1>

          {/* DESCRIPTION */}
          <p className="md:text-xl text-gray-700 max-w-xl">
            I specialize in building modern, scalable, and user-friendly web
            applications using <span className="font-semibold">React.js</span>,{" "}
            <span className="font-semibold">Next.js</span>, and{" "}
            <span className="font-semibold">AI integrations</span>. My goal is
            to turn ideas into impactful digital experiences.
          </p>

          {/* BUTTONS */}
          <div className="w-full flex justify-center lg:justify-start gap-4">
            <button
              onClick={navigatePortfolio}
              className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition"
            >
              View My Work
            </button>
            <button
              onClick={navigateContact}
              className="px-6 py-3 rounded-lg ring-1 ring-gray-400 hover:bg-gray-100 transition"
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
