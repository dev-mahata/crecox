import React from 'react'
import { Network } from 'lucide-react'
import rocket from "../assets/images/rocket.png"
import { workflowSteps } from './WorkflowData'
import WorkflowStep from './WorkflowStep'

function Workflow() {
  return (
    <section className='py-24 md:py-32'>
      <div className='mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8'>

        {/* Badge */}
        <div className='flex w-fit items-center text-[#FBDAAF] mb-6 gap-2 px-4 py-2 rounded-full bg-[#FBDAAF]/10 border border-[#FBDAAF]/20 text-sm font-medium'>
          <Network size={16} />
          The CrecoX Workflow
        </div>

        {/* Heading */}
        <h2 className='text-[40px] sm:text-[48px] md:text-[56px] leading-tight mb-10 font-light'>
          How <span className="text-transparent bg-clip-text bg-linear-to-r from-[#C25CF5] to-[#7338EC] font-bold">Crecox</span> Works
        </h2>

        {/* Description */}
        <p className="mb-16 max-w-3xl text-[16px] leading-7 text-[#99A1AF] sm:text-[18px] md:mb-20 md:text-[20px]">
          From campaign launch to community growth, discover the journey that transforms fans into creators and music into movements
        </p>

        {/* Rocket Icon */}
        <div className="">
          <img src={rocket} width={57} />
        </div>

        <div className="mt-16 w-full max-w-3xl md:mt-20">
          {workflowSteps.map((step, index) => (
            <div key={index} className=" flex flex-col items-center">
              <WorkflowStep step={step} />
              {index !== workflowSteps.length - 1 && (
                <div className="mt-8 mb-8 h-24 w-0.5 bg-[#E4B5FB33] md:mt-10 md:mb-10 md:h-40"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Workflow