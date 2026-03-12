import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Workflow from '../components/Workflow'
import MissionVision from '../components/MissionVision'
import Artists from '../components/Artists'
import Creators from '../components/Creators'
import MusicEra from '../components/MusicEra'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import ray from '../assets/images/ray2.png'
import glow from '../assets/images/heroGlow.png'


function Landing() {
    return (
        <>
            <div className='bg-darkBg text-[#FFFFFF] font-primary relative overflow-hidden'>
                {/* Purple Glow */}
                <div className='absolute right-0 pointer-events-none'>
                    <img src={glow} width={500} alt="" />
                </div>

                <div className='absolute right-0 pointer-events-none'>
                    <img src={ray} width={151} alt="" />
                </div>
                <div className='absolute right-7 -top-5 pointer-events-none'>
                    <img src={ray} width={165} alt="" />
                </div>

                <Navbar />
                <Hero />
                <Workflow />
                <MissionVision />
                <Artists />
                <Creators />
                <MusicEra />
                <CTA />
                <Footer />
            </div>
        </>
    )
}

export default Landing