import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[45px] xl:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#283640]"/>
          <div className="w-1 sm:h-80 h-40 dark-gradient" />
        </div>

        <div className='z-10'>
          <h1 className={`${styles.heroHeadText} text-[#283640]`}>Welcome,</h1>
          <p className={`${styles.heroSubText} mt-2 text-[#283640]`}>to my digital oasis, <br className="sm:block hidden" /> a space for Connection<br className="sm:block hidden" /> and Inspiration</p>
        </div>

      </div>

      <ComputersCanvas />
      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#283640] flex justify-center items-start p-2">
            <motion.dev 
              animate={{ 
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-[#283640] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero