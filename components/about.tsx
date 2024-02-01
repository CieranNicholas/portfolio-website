"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

const About = () => {
  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        🚀 Hello there! I'm <span className='underline'>Cieran</span>, a
        passionate web developer on a mission to bring ideas to life in the
        digital world. With a love for clean code and creative problem-solving,
        I specialize in building user-friendly and visually appealing websites.
      </p>
      <p className='mb-3'>
        💻 Armed with a solid foundation in{" "}
        <span className='underline'>React</span>, I thrive in turning complex
        concepts into elegant, functional solutions. Whether it's crafting
        responsive designs or diving into the world of backend development, I'm
        always excited to take on new challenges.
      </p>
      <p>
        🌐 When I'm not coding, my creativity takes on new forms. I'm a music
        producer and hobbyist Unreal Engine game developer. Whether I'm making
        songs or building virtual worlds, my joy comes from translating ideas
        into captivating user experiences.
      </p>
    </motion.section>
  );
};

export default About;
