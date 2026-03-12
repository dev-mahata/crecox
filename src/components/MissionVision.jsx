import React from 'react'
import InfoCard from './InfoCard'
import { Eye } from 'lucide-react'
import { Heart } from 'lucide-react'
import { Target } from 'lucide-react'

function MissionVision() {
  return (
    <section className='md:py-32 py-24 md:px-72 px-4'>
      <div className='text-center max-w-7xl'>
        {/* Heading */}
        <h2 className='font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#FFFFFF] to-[#6A7282] md:font-bold text-[40px] md:text-[56px] leading-12 md:leading-15 pb-2 hover:bg-'>
          Revolutionizing <span className='font-light text-[#6A7282] text-[45px] md:text-[56px] leading-12 md:leading-15'>Music Growth</span>
        </h2>

        {/* Description */}
        <p className='text-[#99A1AF] mt-7 mb-20 md:mt-10 text-[16px] mx-auto md:text-[20px] max-w-[70%] leading-6 md:leading-7'>CrecoX is a global UGC music marketing platform that empowers real people—fans, creators, and music lovers—to drive authentic engagement and participatory growth.</p>

        <div className='grid md:grid-cols-2 gap-8'>
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