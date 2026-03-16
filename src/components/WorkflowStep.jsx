import React from "react"

function WorkflowStep({ step, active, glowPhase }) {
  return (
    <div
      className={`relative w-full max-w-xl rounded-[28px] px-6 py-8 text-center transition-all duration-300 ${active
        ? "bg-[#06010A] shadow-[0_0_30px_rgba(194,92,245,0.55),0_0_90px_rgba(194,92,245,0.35)]"
        : "bg-transparent"
        }`}
    >


      <div className="relative flex flex-col items-center">
        <div className="mb-6 h-40 sm:h-44 md:h-52">
          <img src={step.image} alt={step.title} className={`h-full object-contain ${step.imageClass || ""}`} />
        </div>

        <h3 className="text-[24px] leading-7 font-semibold md:text-[30px] md:leading-9 md:font-bold">
          {step.title}
        </h3>

        <p className="mt-2 text-[14px] leading-5 font-semibold tracking-[0.5px] text-[#C25CF5] uppercase md:tracking-[0.7px]">
          {step.subtitle}
        </p>

        <p className="mt-4 mx-auto max-w-xl text-[15px] leading-6 text-[#99A1AF] sm:text-[16px] md:leading-7">
          {step.description}
        </p>
      </div>
    </div>
  )
}


export default WorkflowStep
