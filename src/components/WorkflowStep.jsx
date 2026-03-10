import React from 'react'

function WorkflowStep({step}) {
  return (
    <div className='text-center'>
        <img src={step.icon} alt="" className='w-91.25 h-67.5 mb-6 mx-auto' />
        <h3 className='font-semibold md:font-bold text-[24px] md:text-[30px] leading-7 md:leading-9'>{step.title}</h3>
        <p className='text-[#C25CF5] leading-4.5 md:leading-5 text-[14px] tracking-[0.5px] md:tracking-[0.7px] mt-2 font-semibold uppercase'>{step.subtitle}</p>
        <p className='mt-4 text-[16px] leading-6 md:leading-7.3 max-w-md'>{step.description}</p>
    </div>
  )
}

export default WorkflowStep