import React, { useRef, useState } from 'react'
import { artistSlides } from './ArtistSlides'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'

function Artists() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPinned, setIsPinned] = useState(false)
  const [isPastSection, setIsPastSection] = useState(false)
  const sectionHeight = `${100 + (artistSlides.length - 1) * 55}vh`
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!ref.current) return

    const sectionTop = ref.current.offsetTop
    const sectionHeight = ref.current.offsetHeight
    const scrollRange = Math.max(sectionHeight - window.innerHeight, 1)
    const sectionEnd = sectionTop + scrollRange
    const progress = Math.min(
      0.9999,
      Math.max(0, (latest - sectionTop) / scrollRange)
    )
    const index = Math.min(
      artistSlides.length - 1,
      Math.floor(progress * artistSlides.length)
    )

    setIsPinned(latest >= sectionTop && latest < sectionEnd)
    setIsPastSection(latest >= sectionEnd)
    setActiveIndex(index)
  })
  const slide = artistSlides[activeIndex]

  return (
    <section ref={ref} className='relative' style={{ height: sectionHeight }}>
      <div
        className={`w-full flex flex-col justify-start md:justify-center px-4 sm:px-6 py-10 sm:py-12 md:py-16 lg:py-24 md:h-screen
 ${isPinned
            ? 'fixed top-0 left-0'
            : isPastSection
              ? 'absolute bottom-0 left-0'
              : 'absolute top-0 left-0'
          }`}
      >
        <div className='text-center mb-10'>
          <h2 className='text-[52px] md:text-[56px] font-light leading-15'>
            For <span className='bg-linear-to-r from-[#FBDAAF] via-[#C25CF5] to-[#7338EC] text-transparent bg-clip-text font-semibold'>Artists & Labels</span>
          </h2>
          <p className='text-[#99A1AF] mt-6'>
            Grow your music with the power of community
          </p>
        </div>

        <div className='mx-auto w-full max-w-5xl rounded-[28px] bg-linear-to-b from-white/1 to-white/3 px-4 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:px-6 md:py-6'>
          <div className='grid grid-cols-1 md:grid-cols-[0.95fr_1.15fr] gap-10 items-center'>
            <div className='relative min-h-[180px]'>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${activeIndex}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className='absolute inset-0'
                >
                  <h3 className='font-semibold mb-6 text-[24px] leading-9'>
                    {slide.title}
                  </h3>
                  <p className='leading-7 text-[#99A1AF]'>
                    {slide.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className='relative'>
              <div className="absolute -left-10 -right-10 -bottom-12 top-6 rounded-[44px] bg-[radial-gradient(ellipse_at_center,_rgba(194,92,245,0.72)_0%,_rgba(194,92,245,0.36)_40%,_rgba(115,56,236,0.14)_62%,_rgba(115,56,236,0)_80%)] blur-[72px]"></div>
              <div className="absolute -inset-10 rounded-[44px] bg-[radial-gradient(ellipse_at_center,_rgba(194,92,245,0.68)_0%,_rgba(194,92,245,0.34)_38%,_rgba(115,56,236,0.16)_58%,_rgba(115,56,236,0)_78%)] blur-[72px]"></div>

              <div className='relative rounded-[30px] bg-linear-to-b from-[#C25CF58C] to-[#7338EC0A] p-[1.5px] shadow-[0_0_40px_rgba(194,92,245,0.22)]'>
                <div className='rounded-[28px] bg-[#FFFFFF0D] border border-[#FFFFFF1A] p-3'>
                  <div className='relative aspect-[517/352] w-full overflow-hidden rounded-[22px]'>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`image-${activeIndex}`}
                        src={slide.image}
                        className="relative h-full w-full object-cover"
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.02, y: -20 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      />
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className='bg-linear-to-r from-[#C25CF5] to-[#FBDAAF] leading-9 text-[28px] font-normal text-transparent bg-clip-text text-center mt-16'>
          "Your music becomes a movement  — powered by real people."
        </p>
      </div>
    </section>
  )
}

export default Artists
