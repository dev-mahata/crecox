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
import ray from "../assets/images/ray2.png"


function Landing() {
    return (
        <>
            <div className='bg-darkBg text-[#FFFFFF] font-primary relative overflow-x-hidden'>
                <div className='pointer-events-none absolute inset-0 overflow-hidden'>
                   <div className='w-[300px] opacity-85 h-[383px] absolute -top-[145px] -right-5 -rotate-[140deg] bg-[#C25CF580] rounded-full blur-3xl'></div>
                   <div className='absolute -top-1 -right-1'>
                    <img src={ray} width={210} alt="" />
                   </div>
                   <div className='absolute -top-10 right-8'>
                    <img src={ray} width={230} alt="" />
                   </div>
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
