
import React from 'react'
import { motion } from 'framer-motion'
import { Apple } from 'lucide-react'
import { CirclePlay } from 'lucide-react'
import creator1 from "../assets/images/creator1.png"
import creator2 from "../assets/images/creator2.png"
import creator3 from "../assets/images/creator3.png"
import creator4 from "../assets/images/creator4.png"
import line1 from "../assets/images/lines/line1.png"
import line2 from "../assets/images/lines/line2.png"
import line3 from "../assets/images/lines/line3.png"
import line4 from "../assets/images/lines/line4.png"
import line5 from "../assets/images/lines/line5.png"
import line6 from "../assets/images/lines/line6.png"
import line7 from "../assets/images/lines/line7.png"

function Hero() {
  return (
    <section className='relative min-h-[calc(100vh-80px)] flex items-center justify-center py-16 sm:py-20 lg:py-24 overflow-hidden'>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        <div className="grid md:grid-cols-2 items-center gap-8 md:gap-10">

          {/* LEFT CONTENT */}
          <div className="hero-content text-center md:text-left flex flex-col items-center md:items-start">

            {/* Badge */}
            <div className="hero-badge mb-6 flex items-center bg-white/10 gap-3 px-4 py-1.5 w-fit border border-white/20 rounded-full">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-white/80">
                Powering the future of music marketing
              </span>
            </div>

            {/* Heading */}
            <h1 className='font-secondary text-[40px] sm:text-[48px] md:text-[58px] lg:text-[68px] font-normal leading-tight'>
              Where Music
            </h1>
            <h1 className='font-secondary mb-6 text-[40px] sm:text-[48px] md:text-[58px] lg:text-[68px] font-normal leadingtight bg-linear-to-r from-[#7338EC] via-[#C25CF5] to-[#FBDAAF] bg-clip-text text-transparent'>
              Meets Movement
            </h1>

            {/* Description */}
            <p className='text-[#E5E7EB] text-[16px] md:text-[18px] leading-7 md:leading-[32.5px] mb-6'>
              Where fans, creators, and artists build music trends together
            </p>
            <p className='text-[#99A1AF] text-[14px] md:text-[16px] leading-6 md:leading-[29.25px]'>
              UGC-powered music growth driven by real people - not traditional ads
            </p>

            {/* Buttons */}
            <div className="hero-buttons mt-10 flex w-full items-center flex-col md:w-auto md:flex-row gap-4">
              <div className="relative w-full md:w-auto">

                {/* Bottom glow */}
                <div className="md:absolute md:flex hidden left-1/2 -translate-x-1/2  h-5 w-full -bottom-2.5 blur-xl opacity-100 bg-linear-to-r from-[#FBDAAF] via-[#C25CF5] to-[#7338EC] rounded-full"></div>

                <button className="relative flex w-full md:w-auto items-center justify-center gap-3 px-8 py-4 rounded-full
                bg-[linear-gradient(90deg,#FBDAAF,#C25CF5,#7338EC,#C25CF5,#FBDAAF)]
                bg-size-[200%_100%]
                bg-left hover:bg-right
                transition-all duration-700
              text-black text-[16px] font-medium cursor-pointer"
                >
                  <Apple size={20} /> Download for iOS →
                </button>
              </div>
              <div className="relative w-full md:w-auto group overflow-hidden rounded-full">

                {/* white wave */}
                <span
                  className="md:absolute inset-0 z-0 pointer-events-none
                              bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.2),transparent)]
                              bg-size-[200%_100%] bg-left
                              transition-[background-position] duration-700 
                               group-hover:bg-right"
                ></span>

                <button
                  className="flex w-full md:w-auto items-center justify-center gap-3 px-8 py-4 rounded-full z-10 relative
                  text-white text-[16px] bg-white/10 font-medium border border-white/20 cursor-pointer"
                >
                  <CirclePlay size={20} />
                  Download for Android →
                </button>

              </div>
            </div>


          </div>

          {/* RIGHT IMAGES */}
          <div className="hero-images w-full max-w-xs lg:max-w-sm hidden md:grid grid-cols-2 justify-self-end">

            <img src={creator1} alt="" />
            <img src={creator2} alt="" />
            <img src={creator3} alt="" />
            <img src={creator4} alt="" />

          </div>

        </div>

      </div>

      {/* lines container */}
      <motion.div className="hidden lg:flex flex-col gap-4 absolute top-[62%] left-0"
        initial="rest"
        whileHover="hover">
        <motion.img
          src={line1}
          variants={{
            rest: { y: 0 },
            hover: {
              y: [0, -10, 0, 10, 0],
              transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }
            }
          }}
        />
        <motion.img
          src={line2}
          variants={{
            rest: { y: 0 },
            hover: {
              y: [0, -10, 0, 10, 0],
              transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }
            }
          }}
        />
        <motion.img
          src={line3}
          variants={{
            rest: { y: 0 },
            hover: {
              y: [0, -10, 0, 10, 0],
              transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }
            }
          }}
        />
        <motion.img
          src={line4}
          variants={{
            rest: { y: 0 },
            hover: {
              y: [0, -10, 0, 10, 0],
              transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4
              }
            }
          }}
        />
        <motion.img
          src={line5}
          variants={{
            rest: { y: 0 },
            hover: {
              y: [0, -10, 0, 10, 0],
              transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }
            }
          }}
        />
        <motion.img
          src={line6}
          variants={{
            rest: { y: 0 },
            hover: {
              y: [0, -10, 0, 10, 0],
              transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }
            }
          }}
        />
        <motion.img
          src={line7}
          variants={{
            rest: { y: 0 },
            hover: {
              y: [0, -10, 0, 10, 0],
              transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7
              }
            }
          }}
        />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-[pulse_4s_ease-in-out_infinite] absolute w-1.5 h-1.5 bg-[#AD46FF] opacity-0.42 rounded-full top-[7.17%] left-[44.72%]" />
        <div className="animate-[pulse_4s_ease-in-out_infinite] absolute w-1.5 h-1.5 bg-[#AD46FF] opacity-0.29 rounded-full top-[28%] left-[5.14%]" />
        <div className="animate-[pulse_4s_ease-in-out_infinite] absolute w-1.5 h-1.5 bg-[#AD46FF] opacity-0.52 rounded-full top-[28.75%] left-[50.69%]" />
        <div className="animate-[pulse_4s_ease-in-out_infinite] absolute w-1 h-1 bg-[#AD46FF] opacity-0.10 rounded-full top-[22%] left-[61.9%]" />
        <div className="animate-[pulse_4s_ease-in-out_infinite] absolute w-1.5 h-1.5 bg-[#AD46FF] opacity-0.59 rounded-full top-[69.31%] left-[27.27%]" />
        <div className="animate-[pulse_4s_ease-in-out_infinite] absolute w-1.5 h-1.5 bg-[#AD46FF] opacity-0.10 rounded-full top-[80.46%] left-[2.46%]" />
        <div className="animate-[pulse_4s_ease-in-out_infinite] absolute w-1.5 h-1.5 bg-[#AD46FF] opacity-0.20 rounded-full top-[85.15%] left-[9.10%]" />
        <div className="animate-[pulse_4s_ease-in-out_infinite] absolute w-1.5 h-1.5 bg-[#AD46FF] opacity-0.20 rounded-full top-[85.15%] left-[7.10%]" />
        <div className="animate-[pulse_4s_ease-in-out_infinite] absolute w-1.5 h-1.5 bg-[#AD46FF] opacity-0.30 rounded-full top-[93.15%] left-[9.7%]" />
        <div className="animate-[pulse_4s_ease-in-out_infinite] absolute w-1 h-1 bg-[#AD46FF] opacity-0.12 rounded-full top-[83.65%] left-[60.5%]" />
      </div>

    </section>
  )
}

export default Hero