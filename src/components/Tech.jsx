import React from "react";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import {marketingTechnologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div>
        <div>
          <p className="sm:text-[18px] text-[14px] text-[#283640] uppercase tracking-wider pb-5">
              Development Skills
          </p>
          <div className='flex flex-row flex-wrap justify-center gap-10 mb-8'>
            {technologies.map((technology) => (
              <div className='w-16 h-16 lg:w-20 lg:h-20' key={technology.name}>
                {/* <BallCanvas icon={technology.icon} /> */}
                <img src={technology.icon} alt={technology.text} className="w-auto h-auto hover:scale-105 transition duration-300" />
                <p className="text-center text-xs text-[14px]">{technology.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="sm:text-[18px] text-[14px] text-[#283640] uppercase tracking-wider pb-5">
              Digital Marketing Skills
          </p>
          <div className='flex flex-row flex-wrap justify-center gap-10 mb-8'>
            {marketingTechnologies.map((technology) => (
              <div className='w-16 h-16 lg:w-20 lg:h-20' key={technology.name}>
                {/* <BallCanvas icon={technology.icon} /> */}
                <img src={technology.icon} alt={technology.text} className="w-auto h-auto hover:scale-105 transition duration-300" />
                <p className="text-center text-xs text-[14px]">{technology.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
