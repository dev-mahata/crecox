import React from 'react'
import logo from '../assets/images/logo.png';

function Navbar() {
    return (
        <nav className="w-full border-b border-white/10 text-[#FFFFFF] z-20">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

                <div className="">
                    <a href=""><img src={logo} className='h-10' alt="" /></a>
                </div>

                <div className="hidden md:flex gap-6 lg:gap-8 text-sm text-[#99A1AF]">
                    <a href="#">About</a>
                    <a href="#">For Artists</a>
                    <a href="#">For Creators</a>
                    <a href="#">Platform</a>
                </div>

                <button className="hidden md:block bg-white/5 border border-white/20 text-white px-5 py-2 rounded-full text-sm hover:bg-white/10 transition cursor-pointer">
                    Download App →
                </button>

            </div>
        </nav>
    )
}

export default Navbar