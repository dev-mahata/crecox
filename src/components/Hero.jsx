
import React from 'react'
import { Apple } from 'lucide-react'
import { CirclePlay } from 'lucide-react'
import hero from "../assets/images/hero.png"
import creator1 from "../assets/images/creator1.png"
import creator2 from "../assets/images/creator2.png"
import creator3 from "../assets/images/creator3.png"
import creator4 from "../assets/images/creator4.png"

function Hero() {
  return (
    <section className='min-h-[990px] flex items-center justify-center py-24'>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-[572px_500px] items-center justify-center gap-16">

          {/* LEFT CONTENT */}
          <div className="hero-content max-h-114 text-center md:text-left flex flex-col items-center md:items-start">

            {/* Badge */}
            <div className="hero-badge mb-6 flex items-center bg-white/10 gap-3 px-4 py-1.5 w-fit border border-white/20 rounded-full">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-white/80">
                Powering the future of music marketing
              </span>
            </div>

            {/* Heading */}
            <h1 className='font-secondary text-[42px] md:text-[68px] font-normal leading-18 md:leading-22.5'>
              Where Music
            </h1>
            <h1 className='font-secondary mb-6 text-[42px] md:text-[68px] font-normal leading-18 md:leading-22.5 bg-linear-to-r from-[#7338EC] via-[#C25CF5] to-[#FBDAAF] bg-clip-text text-transparent'>
              Meets Movement
            </h1>

            {/* Description */}
            <p className='text-[#E5E7EB] text-[16px] md:text-[18px] leading-7 md:leading-[32.5px] mb-6'>
              Where fans, creators, and artists build music trends together
            </p>
            <p className='text-[#99A1AF] text-[14px] md:text-[146x] leading-6 md:leading-[29.25px]'>
              UGC-powered music growth driven by real people — not traditional ads
            </p>

            {/* Buttons */}
            <div className="hero-buttons mt-10 flex flex-col md:flex-row gap-4">
              <div className="relative inline-block">
                <div className="md:absolute inset-0 blur-3xl opacity-70 bg-linear-to-r from-[#FBDAAF] via-[#C25CF5] to-[#7338EC] rounded-full"></div>
                <button className="relative flex items-center gap-3 px-8 py-4 rounded-full
                bg-[linear-gradient(90deg,#FBDAAF,#C25CF5,#7338EC,#C25CF5,#FBDAAF)]
                bg-size-[200%_100%]
                bg-left hover:bg-right
                transition-all duration-700
              text-black text-[16px] font-medium cursor-pointer"
                >
                  <Apple size={20} /> Download for iOS →
                </button>
              </div>
              <div className="relative inline-block group overflow-hidden rounded-full">

                {/* white wave */}
                <span
      className="md:absolute inset-0 pointer-events-none
      bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.2),transparent)]
      bg-size-[200%_100%] bg-left
      transition-[background-position] duration-700
      group-hover:bg-right"
    ></span>

                <button
                  className="relative flex items-center gap-3 px-8 py-4 rounded-full
    text-white text-[16px] bg-white/10 font-medium border border-white/20 cursor-pointer"
                >
                  <CirclePlay size={20} />
                  Download for Android →
                </button>

              </div>
            </div>


          </div>

          {/* RIGHT IMAGES */}
          <div className="hero-images max-w-50 md:max-w-100 max-h-100 hidden md:grid grid-cols-2 justify-self-end">
          
              <img src={creator1} alt="" />
              <img src={creator2} alt="" />
              <img src={creator3} alt="" />
              <img src={creator4} alt="" />

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero