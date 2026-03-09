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


function Landing() {
    return (
        <>
            <div className='bg-darkBg text-[#FFFFFF] font-primary relative overflow-hidden'>
                {/* Purple Glow */}
                <div className='absolute z-0 w-80 h-70 bg-linear-to-br from-purple-600 to-pink-500 
                opacity-50 blur-[120px] -top-20 -right-10 pointer-events-none'></div>

                {/* Ray 1 Glow*/}
                <div className='absolute w-[150px] h-[50px] bg-linear-to-r 
                from-fuchsia-500 to-pink-500 top-0 -right-12 rotate-[-60deg] opacity-100 blur-[2px] '
                    style={{
                        clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)"
                    }}></div>

                {/* Ray 1 */}
                <div className='absolute w-[250px] h-[100px] bg-gradient-to-r from-transparent
                via-purple-500 to-transparent -top-10 -right-10 rotate-[-60deg] 
                opacity-100 blur-[20px] pointer-events-none'
                    style={{
                        clipPath: "polygon(100% 0%, 70% 0%, 100% 70%)"
                    }}></div>

                {/* Ray 2 Glow*/}
                <div className='absolute w-[150px] h-[50px] bg-linear-to-r 
                from-fuchsia-500 to-pink-500 top-0 right-0 rotate-[-60deg] opacity-100 blur-[0px] '
                    style={{
                        clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)"
                    }}></div>

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