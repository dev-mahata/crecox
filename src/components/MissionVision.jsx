import React from 'react'
import InfoCard from './InfoCard'
import { Eye } from 'lucide-react'
import { Target } from 'lucide-react'

function MissionVision() {
  return (
    <section className='px-4 pb-24 md:pb-32'>
      <div className='mx-auto max-w-7xl text-center sm:px-6 lg:px-8'>
        {/* Heading */}
        <h2 className='text-[38px] sm:text-[46px] md:text-[56px] font-semibold md:font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-[#FFFFFF] to-[#6A7282] pb-2'>
          Revolutionizing <span className='text-[38px] sm:text-[46px] md:text-[56px] font-light leading-tight text-[#6A7282]'>Music Growth</span>
        </h2>

        {/* Description */}
        <p className='text-[#99A1AF] mt-7 mb-16 md:mb-20 md:mt-10 text-[16px] mx-auto md:text-[20px] max-w-3xl leading-6 md:leading-7'>CrecoX is a global UGC music marketing platform that empowers real people—fans, creators, and music lovers—to drive authentic engagement and participatory growth.</p>

        <div className='grid gap-6 md:grid-cols-2 md:gap-8 max-w-4xl mx-auto'>
          <InfoCard
            gradient="bg-linear-to-br from-[#FBDAAF] via-[#C25CF5] to-[#7338EC]"
            icon={<Target />}
            title="Our Mission"
            description="Empower artists, creators, and fans through creativity and community-driven UGC. We believe music grows best when everyone can participate."
          />
          <InfoCard
            gradient="bg-linear-to-tr from-[#FBDAAF] via-[#C25CF5] to-[#7338EC]"
            icon={<Eye />}
            title="Our Vision"
            description="Build the world's largest participatory music growth platform where every fan is a creator and every artist has direct community connections."
          />
        </div>
      </div>
    </section>
  )
}

export default MissionVision