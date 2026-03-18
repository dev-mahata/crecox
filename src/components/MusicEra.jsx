import React from 'react'
import InfoCard from './InfoCard'
import { Heart, Music2, TrendingUp } from 'lucide-react'

function MusicEra() {
  return (
    <section className='py-12 sm:py-16 md:py-20 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] font-light leading-tight text-transparent bg-clip-text bg-linear-to-r from-[#6A7282] to-[#FFFFFF]'>
          The New Era of <span className='text-[38px] sm:text-[46px] md:text-[56px] font-semibold md:font-bold leading-tight'>Music</span>
        </h2>
        <p className='mt-7 mb-16 md:mb-20 text-[16px] md:text-[20px] leading-tight text-[#99A1AF]'>
          Fan = Creator = Promoter. Everyone has a voice. Everyone can contribute.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 max-w-5xl mx-auto'>
          <InfoCard
            gradient="bg-linear-to-br from-[#FBDAAF] via-[#C25CF5] to-[#7338EC]"
            icon={<Heart />}
            title="Fan Engagement"
            description="Fans create, remix, and share. They're active participants in the music journey."
          />
          <InfoCard
            gradient="bg-linear-to-tr from-[#FBDAAF] via-[#C25CF5] to-[#7338EC]"
            icon={<Music2 />}
            title="Creator Economy"
            description="Get recognized and rewarded for contributions to the music ecosystem."
          />
          <InfoCard
            gradient="bg-linear-to-bl from-[#FBDAAF] via-[#C25CF5] to-[#7338EC]"
            icon={<TrendingUp />}
            title="Organic Growth"
            description="Authentic promotion through community creates real, sustainable growth."
          />
        </div>
      </div>
    </section>
  )
}

export default MusicEra