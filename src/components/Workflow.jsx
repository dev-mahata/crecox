import React, { useLayoutEffect, useRef, useState } from "react"
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import { Network } from "lucide-react"
import rocket from "../assets/images/rocket.png"
import { workflowSteps } from "./workflowData.js"
import WorkflowStep from "./WorkflowStep"


function Workflow() {
  const sectionRef = useRef(null) // whole workflow section
  const listRef = useRef(null) // area that contains the timeline + steps
  const stepRefs = useRef([]) // stores all step DOM nodes

  const [activeIndex, setActiveIndex] = useState(-1) // currently highlighted card
  const [stepPoints, setStepPoints] = useState([])
  const [glowPhase, setGlowPhase] = useState("upper")

  const setStepRef = (index) => (node) => {
    stepRefs.current[index] = node
  }

  useLayoutEffect(() => {
    const measureSteps = () => {
      if (!listRef.current) return

      const listTop = listRef.current.getBoundingClientRect().top

      const points = stepRefs.current.map((node) => {
        if (!node) return { top: 0, center: 0 }

        const rect = node.getBoundingClientRect()
        const top = rect.top - listTop

        return {
          top,
          center: top + rect.height / 2,
        }
      })

      setStepPoints(points)
    }

    measureSteps()
    const resizeObserver = new ResizeObserver(measureSteps)

    if (listRef.current) resizeObserver.observe(listRef.current)
    stepRefs.current.forEach((node) => node && resizeObserver.observe(node))
    window.addEventListener("resize", measureSteps)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", measureSteps)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: listRef, // only track this section's scroll
    offset: ["start 60%", "end 80%"],
  })

  const startY = stepPoints[0]?.top ?? 0 // first card center
  const endY = stepPoints[stepPoints.length - 1]?.top ?? 0 // last card center

  const introEnd = 0.16 // first 16% of section scroll is rocket intro
  const alignmentOffset = 12
  const rocketY = useTransform(scrollYProgress, [0, introEnd], [startY - 400 + alignmentOffset, startY + alignmentOffset])
  const rocketOpacity = useTransform(
    scrollYProgress,
    [0, introEnd * 0.8, introEnd],
    [1, 1, 0] // rocket stays visible, then fades when it enters first card
  )
  const rocketScale = useTransform(
    scrollYProgress,
    [0, introEnd],
    [1, 0.82] // slight shrink so it feels like it is diving inward
  )
  const beamY = useTransform(scrollYProgress, [introEnd, 1], [startY + alignmentOffset, endY + alignmentOffset])

  const beamOpacity = useTransform(
    scrollYProgress,
    [introEnd * 0.7, introEnd, 1],
    [0, 1, 1] // beam appears right after rocket goes inside
  )
  // convert scroll progress into rocket position

  useMotionValueEvent(beamY, "change", (latest) => {
    if (!stepPoints.length) return

    let nearestIndex = -1
    let nearestDistance = Infinity

    stepPoints.forEach((point, index) => {
      if (index === 0) return

      const distance = Math.abs(point.top - latest)

      if (distance < nearestDistance) {
        nearestDistance = distance
        nearestIndex = index
      }
    })

    setActiveIndex((prev) => (prev === nearestIndex ? prev : nearestIndex))

    const activePoint = stepPoints[nearestIndex]
    if (activePoint) {
      setGlowPhase(latest < activePoint.center ? "upper" : "lower")
    }
  })


  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-[#FBDAAF]/20 bg-[#FBDAAF]/10 px-4 py-2 text-sm font-medium text-[#FBDAAF]">
          <Network size={16} />
          The CrecoX Workflow
        </div>

        <h2 className="mb-10 text-[40px] leading-tight font-light sm:text-[48px] md:text-[56px]">
          How{" "}
          <span className="bg-linear-to-r from-[#C25CF5] to-[#7338EC] bg-clip-text font-bold text-transparent">
            Crecox
          </span>{" "}
          Works
        </h2>

        <p className="mb-16 max-w-3xl text-[16px] leading-7 text-[#99A1AF] sm:text-[18px] md:mb-20 md:text-[20px]">
          From campaign launch to community growth, discover the journey that transforms fans into creators and music into movements
        </p>

        <div
          ref={listRef}
          className="relative mt-8 w-full max-w-3xl pt-36 md:mt-12 md:pt-44"
        >

          <div className="absolute left-1/2 top-28 h-[calc(100%-7rem)] w-px -translate-x-1/2 bg-linear-to-b from-transparent via-[#E4B5FB33] to-transparent md:top-36 md:h-[calc(100%-9rem)]" />
          {/* full vertical center line */}

          <div className="pointer-events-none sticky top-24 z-0 h-0">
            <motion.div
              style={{ y: rocketY, opacity: rocketOpacity, scale: rocketScale }}
              className="absolute left-1/2 top-0 -translate-x-1/2"
            >
              <img
                src={rocket}
                alt="Rocket"
                className="w-[57px] drop-shadow-[0_0_24px_rgba(194,92,245,0.85)]"
              />
            </motion.div>

            <motion.div
              style={{ y: beamY, opacity: beamOpacity }}
              className="absolute left-1/2 top-0 -translate-x-1/2"
            >
              <div
                className="absolute left-1/2 top-0 -translate-x-1/2"
              >
                <div
                  className="w-[60px] h-[100px]"
                  style={{
                    background: `
        radial-gradient(
          ellipse at center,
          rgba(255,255,255,0.9) 0%,
          rgba(255,120,255,0.9) 10%,
          rgba(210,80,255,0.8) 25%,
          rgba(150,0,255,0.6) 45%,
          rgba(80,0,150,0.35) 65%,
          rgba(0,0,0,0) 80%
        )
      `,
                    filter: "blur(2px)",
                    transform: "scaleY(1.4)",
                    mixBlendMode: "screen"
                  }}
                />
              </div>
            </motion.div>
          </div>


          <div className="relative z-10">
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                ref={setStepRef(index)} // save this card DOM node
                className="flex flex-col items-center pb-40 md:pb-56"
              >
                <WorkflowStep
                  step={step}
                  active={activeIndex === index} // glow only the nearest step
                  glowPhase={activeIndex === index ? glowPhase : null}
                />
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workflow
