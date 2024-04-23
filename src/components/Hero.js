import { motion } from "framer-motion"

import {styles} from '../app/styles'
import {ComputersCanvas} from './canvas'

const Hero = () => {
  return(
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-indigo-500"/>
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-indigo-500"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-indigo-500">Md. Jahangir Alam</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I developer 3D Visuals, user <br className="sm:block hidden"/>interfaces and web applications</p>
        </div>
      </div>
    </section>
  )}
export default Hero;