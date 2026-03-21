import React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Apple, CirclePlay } from 'lucide-react'

function CTA() {
  const mouseX = useMotionValue(-320)
  const gradientOpacity = useMotionValue(0)
  const gradientX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const backgroundOpacity = useSpring(gradientOpacity, { stiffness: 70, damping: 18 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const progress = (e.clientX - rect.left) / rect.width
    const moveRange = 420
    gradientOpacity.set(1)
    mouseX.set(-moveRange + progress * moveRange * 2)
  }

  const handleMouseLeave = () => {
    gradientOpacity.set(0)
    mouseX.set(-320)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='relative overflow-hidden bg-black py-12 sm:py-16 md:py-20 lg:py-24'>
      {/* Background Wrapper */}
      <div className='absolute inset-0 pointer-events-none'>

        {/* Moving Gradient Field */}
        <motion.div
          className='absolute inset-y-5 left-[-32%] w-[165%] pointer-events-none'
          style={{
            x: gradientX,
            opacity: backgroundOpacity,
            background:
              'linear-gradient(60deg, #020202 0%, #050505 12%, #0f0d09 20%, #241805 30%, #52350e 40%, #9b621a 50%, #d08b36 60%, #e1a06e 68%, #ce7fc8 78%, #8c23d7 90%, #cb00ff 100%)',
            filter: 'blur(24px)',
          }}
        />

        <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.68)_18%,rgba(0,0,0,0.36)_40%,rgba(0,0,0,0.12)_62%,rgba(0,0,0,0.02)_80%,rgba(0,0,0,0)_100%)]'></div>

        {/* Vertical light columns */}
        <div className='absolute inset-0 opacity-60'
          style={{
            background: "repeating-linear-gradient(90deg, rgba(0,0,0,0.24) 0px, rgba(0,0,0,0.24) 36px, rgba(255,255,255,0.07) 38px, rgba(255,255,255,0.015) 52px, rgba(0,0,0,0.18) 66px)"
          }}
        ></div>
      </div>

      <div className='relative z-10'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
          <div className='flex flex-col items-center text-center'>
            <h2 className='font-light text-white leading-tight text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px]'>
              Ready to Start Your
            </h2>

            <h2 className='bg-linear-to-r from-[#7338EC] via-[#C25CF5] to-[#FBDAAF] text-transparent bg-clip-text leading-tight font-bold text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px]'>
              Music Movement?
            </h2>

            <p className='mt-10 text-[16px] md:text-[20px] leading-7 max-w-[600px]'>
              Join thousands of artists and creators building the future of music marketing
            </p>

            <div className='mt-10 md:mt-14 lg:mt-16 flex flex-col lg:flex-row gap-4'>
              <button className="relative flex w-full md:w-auto items-center justify-center gap-3 px-8 py-4 rounded-full
                bg-[linear-gradient(90deg,#FBDAAF,#C25CF5,#7338EC,#C25CF5,#FBDAAF)]
                bg-size-[200%_100%]
                bg-left hover:bg-right
                transition-all duration-700
              text-black text-[16px] font-medium cursor-pointer"
              >
                <Apple size={20} /> Download on App Store →
              </button>

              <button
                className="flex w-full md:w-auto items-center justify-center gap-3 px-8 py-4 rounded-full z-10 relative
                  text-white text-[16px] bg-white/10 font-medium border border-white/20 cursor-pointer"
              >
                <CirclePlay size={20} />
                Get it on Google Play →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
