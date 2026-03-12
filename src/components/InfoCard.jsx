import React from 'react'

function InfoCard({ icon, title, description, gradient }) {
  return (
    <div className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5'>
      <div className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
        <div className='absolute top-[84px] -left-[53px] h-[113px] w-[76px] rotate-[10deg] rounded-full bg-[#FACE96C7] blur-3xl' />
        <div className='absolute -left-[13px] top-[231px] w-[206px] h-[160px] rotate-[19deg] rounded-full bg-[#FF7028D9] blur-[220px]' />
        <div className='absolute left-[253px] top-[238px] w-[154px] h-[158px] rotate-[157deg] rounded-full bg-[#3A00B0] blur-[220px]' />
        <div className='absolute left-[56px] top-[226px] w-[359px] h-[168px] -rotate-[11deg] rounded-full bg-[#C25CF570] blur-[260px]' />
        <div className='absolute left-[380px] top-[84px] w-[63px] h-[211px] -rotate-[168deg] rounded-full bg-[#7338ECB0] blur-[200px]' />
      </div>

      <div className='relative z-10 flex flex-col rounded-3xl p-10 text-start'>
        <div className={`p-4 mb-6 rounded-2xl ${gradient} w-fit`}>
          {icon}
        </div>

        <h3 className='font-bold text-2xl mb-6 leading-9'>{title}</h3>
        <p className='text-[#99A1AF] leading-7.5'>{description}</p>
      </div>
    </div>
  )
}

export default InfoCard
