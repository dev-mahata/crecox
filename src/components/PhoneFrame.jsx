import React from 'react'
import logo from "../assets/images/logo.png"
import { BatteryFull, Wifi, Signal } from 'lucide-react'

function PhoneFrame({ children }) {
  return (
    <div className='relative w-[224px] sm:w-[248px] md:w-[272px] lg:w-[292px] aspect-[9/17] rounded-[32px] bg-black p-2 shadow-[0_0_120px_rgba(115,56,236,0.4)] sm:rounded-[36px]'>
      {/* Notch */}
      <div className='absolute top-3 left-1/2 z-10 h-5 w-16 -translate-x-1/2 rounded-full bg-black sm:top-4 sm:w-20'></div>
      <div className='absolute left-8 top-3 z-10 text-[11px] text-white sm:left-10 sm:top-4 sm:text-[12px]'>9:41</div>
      <div className='absolute right-4 top-3 z-10 flex items-center gap-1 text-white sm:right-6 sm:top-4'>
        <Signal size={14} />
        <Wifi size={14} />
        <BatteryFull size={14} />
      </div>

      {/* Screen */}
      <div className='flex h-full w-full flex-col justify-end overflow-hidden rounded-[28px] bg-[#111111] px-3 py-3 sm:rounded-[36px] sm:px-4'>
        <div className='mb-5 sm:mb-6'><img src={logo} width={54} alt="" /></div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PhoneFrame
