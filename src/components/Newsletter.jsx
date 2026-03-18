import React from 'react'
import newsletter from "../assets/images/newsletter/newsletter.png"

function Newsletter() {
  return (
    <section className='py-12 sm:py-16 md:py-20 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 '>
        <div className='grid gap-12 md:gap-16 lg:gap-20 md:grid-cols-[max-content_max-content] items-center justify-center text-center md:text-left'>
          <div className='w-full'>
            <div className=' w-full max-w-[500px]'>
              <h2 className='font-light text-white leading-tight text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px]'>
                Subscribe to Our
              </h2>
              <h2 className='bg-linear-to-r from-[#FBDAAF] via-[#C25CF5] to-[#7338EC] text-transparent bg-clip-text leading-tight font-bold text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px]'>
                Newsletter
              </h2>
              <p className='mt-8 text-[16px] md:text-[20px] leading-tight text-[#99A1AF]'>
                Music, creators, rewards, and campaigns - straight to your inbox.
              </p>
            </div>

            <div className=' mt-12 w-full max-w-[720px]'>
              <div className='flex flex-col sm:flex-row gap-4'>
                <input type="text" placeholder='Enter Your Email ID Here'
                  className='placeholder:text-[#FFFFFF4D] outline-none text-white/80 px-5.5 py-3 flex-1 rounded-[100px] border border-[#FFFFFF0D] bg-[#FFFFFF1A]'
                />
                <div className='relative'>
                  <button className='w-full relative px-5.5 py-3 rounded-[100px] text-[#231F20] bg-linear-to-r from-[#FBDAAF] via-[#C25CF5] to-[#7338EC]'>
                  Subscribe Now →
                </button>
                <div className="absolute flex left-1/2 -translate-x-1/2  h-5 w-full -bottom-2.5 blur-xl opacity-100 bg-linear-to-r from-[#FBDAAF] via-[#C25CF5] to-[#7338EC] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className='justify-self-center lg:justify-self-end'>
            <img src={newsletter} className='w-[180px] sm:w-[200px] md:w-[200px] lg:w-[280px]' alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter