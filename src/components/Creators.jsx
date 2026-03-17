import React, { useEffect, useState } from 'react'
import { creatorSlides } from "./creatorSlides.js"
import { motion, AnimatePresence } from "framer-motion"
import PhoneFrame from './PhoneFrame.jsx'
import { Music2, Heart, Users, Headphones } from 'lucide-react'


function Creators() {
  const [activeIndex, setActiveIndex] = useState(0)
  const MotionImage = motion.img
  const creatorIcons = [Music2, Heart, Users, Headphones]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (
        currentIndex + 1
      ) % creatorSlides.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className='relative overflow-hidden py-12 sm:py-16 lg:py-24'>
      <div className='mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[0.75fr_1.25fr] md:gap-12 lg:gap-16 lg:px-8'>
        {/* Left -> Phone */}
        <div className='relative flex flex-col items-center'>
          <PhoneFrame>
            <AnimatePresence mode='wait'>
              <MotionImage key={activeIndex} src={creatorSlides[activeIndex].image} alt=""
                className="h-[220px] w-full rounded-2xl object-cover sm:h-[280px] md:h-[320px] lg:h-[380px]"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(event, info) => {
                  if (info.offset.x < -50) {
                    setActiveIndex((prev) => (prev + 1) % creatorSlides.length)
                  } else if (info.offset.x > 50) {
                    setActiveIndex((prev) => (prev - 1 + creatorSlides.length) % creatorSlides.length)
                  }
                }}
              />
            </AnimatePresence>
          </PhoneFrame>

          <div className='pointer-events-none absolute inset-x-0 bottom-24 flex justify-center sm:bottom-28 md:bottom-26 lg:bottom-30'>
            <div className='pointer-events-auto flex items-center gap-1 rounded-[14px] bg-[#0000008C] px-2 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xs sm:px-3'>
              {creatorIcons.map((Icon, index) => (
                <button
                  key={creatorSlides[index].title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex h-9 w-9 items-center justify-center cursor-pointer rounded-lg transition-colors sm:h-10 sm:w-10 ${activeIndex === index
                    ? 'bg-linear-to-b from-[#C25CF5] to-[#7338EC] text-white'
                    : 'text-white/75 hover:bg-white/8 hover:text-white'
                    }`}
                  aria-label={`Show ${creatorSlides[index].title}`}
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-[28px] font-bold leading-tight bg-linear-to-r from-[#FFFFFF] to-[#6A7282] bg-clip-text text-transparent sm:text-[32px] md:text-[34px] lg:text-[36px]">
            {creatorSlides[activeIndex].title}
          </p>
        </div>

        <div className='flex flex-col justify-center text-center md:justify-start md:mt-15 md:text-left lg:mt-20'>
          <h2 className="text-[36px] font-light leading-tight sm:text-[44px] md:text-[48px] lg:text-[56px]">
            For{" "}
            <span className="bg-gradient-to-r from-[#FBDAAF] via-[#C25CF5] to-[#7338EC] text-transparent bg-clip-text font-semibold">
              Creators & Fans
            </span>
          </h2>

          <p className="mt-5 text-[15px] text-[#99A1AF] sm:text-[16px] md:mt-6">
            Create. Participate. Get Rewarded.
          </p>

          <p className="mx-auto mt-4 text-sm leading-6 text-[#99A1AF] sm:text-[15px] sm:leading-7 md:mx-0 md:text-[16px]">
            <span className="text-[#FBDAAF] font-medium">
              Open to everyone.
            </span>{" "}
            No follower requirement. Get rewarded for your creativity.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Creators
