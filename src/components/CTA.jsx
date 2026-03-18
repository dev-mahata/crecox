import React from 'react'
import { Apple, CirclePlay } from 'lucide-react'

function CTA() {
  return (
    <section className='relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24'>
      {/* Background Wrapper */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Purple glow */}
        <div className='absolute right-[-10%] top-[-8%] h-[420px] w-[520px] rounded-full bg-[#C315FF]/45 blur-[120px]'></div>

        {/* Amber glow */}
        <div className='absolute bottom-[-18%] left-[-18%] h-[360px] w-[420px] rounded-full bg-[#D89A2B]/35 blur-[120px]'></div>

        {/* Vertical light columns */}
        <div className='absolute inset-0 opacity-60'
          style={{
            background: "repeating-linear-gradient(90deg, transparent 0px, transparent 42px, rgba(255,255,255,0.06) 44px, rgba(255,255,255,0.02) 58px, transparent 72px)"
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