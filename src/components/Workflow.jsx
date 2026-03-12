import React from 'react'
import { Network } from 'lucide-react'
import rocket from "../assets/images/rocket.png"
import { workflowSteps } from './WorkflowData'
import WorkflowStep from './WorkflowStep'

function Workflow() {
  return (
    <section className='md:py-32 py:24 md:px-70'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col items-center text-center'>

        {/* Badge */}
        <div className='flex w-fit items-center text-[#FBDAAF] mb-6 gap-2 px-4 py-2 rounded-full bg-[#FBDAAF]/10 border border-[#FBDAAF]/20 text-sm font-medium'>
          <Network size={16} />
          The CrecoX Workflow
        </div>

        {/* Heading */}
        <h2 className='text-[52px] md:text-[56px] leading-15 mb-10 font-light'>
          How <span className="text-transparent bg-clip-text bg-linear-to-r from-[#C25CF5] to-[#7338EC] font-bold">Crecox</span> Works
        </h2>

        {/* Description */}
        <p className="text-[#99A1AF] text-[18px] md:text-[20px] leading-7 mb-20 max-w-3xl">
          From campaign launch to community growth, discover the journey that transforms fans into creators and music into movements
        </p>

        {/* Rocket Icon */}
        <div className="">
          <img src={rocket} width={57} />
        </div>

        <div className=" mt-20 max-w-3xl">
          {workflowSteps.map((step, index) => (
            <div key={index} className=" flex flex-col items-center">
              <WorkflowStep step={step} />
              {index !== workflowSteps.length - 1 && (
                <div className="w-0.5 h-40 bg-[#E4B5FB33] mt-10 mb-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Workflow