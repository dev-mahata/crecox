import { useEffect, useState } from 'react'
import Landing from './pages/Landing'
import Lenis from 'lenis'


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Landing />
    </>
  )
}

export default App
