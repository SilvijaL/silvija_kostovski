import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-dark-gradient p-[3px] rounded-[30px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#D6D1C9] rounded-[30px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='frontend-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-black text-[18px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#283640] text-[17px] max-w-3xl leading-[30px]'
      >
        Hi there! I'm Silvija, an experienced front-end developer bridging the gap between code and creativity.
        My background in front-end development has given me a strong foundation in user experience,
        which I'm now leveraging to explore the exciting field of digital marketing.
        This portfolio highlights my abilities in both areas,
        showcasing my diverse skillset and passion for crafting impactful online experiences!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-evenly'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");