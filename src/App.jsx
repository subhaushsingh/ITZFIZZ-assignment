import './App.css'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

function App() {

  const loadingRef = useRef(null)
  const heroRef = useRef(null)
  const progressBarRef = useRef(null)
  const counterRef = useRef(null)
  const horizontalRef = useRef(null)
  const wrapperRef = useRef(null)
  const zoomRef = useRef(null)

  useEffect(() => {

    const ctx = gsap.context(() => {

      // ---------------- LOADING ----------------
      let progress = 0
      const increment = 5

      document.body.style.overflow = "hidden"

      const interval = setInterval(() => {
        if (progress >= 100) {
          clearInterval(interval)

          gsap.to(loadingRef.current, {
            opacity: 0,
            height: 0,
            duration: 0.5,
            onComplete: () => {
              gsap.to(heroRef.current, { opacity: 1 })
              document.body.style.overflowY = "scroll"
            }
          })
        }

        progressBarRef.current.style.width = `${progress}%`
        counterRef.current.textContent = `${progress}%`
        progress += increment
      }, 100)

      // ---------------- HORIZONTAL SCROLL ----------------
      const container = horizontalRef.current
      const containerWidth =
        container.scrollWidth - document.documentElement.clientWidth

      gsap.to(container, {
        x: -containerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          scrub: 0.5,
          pin: true,
          end: "+=" + containerWidth,
        }
      })

      // ---------------- ZOOM SECTION ----------------
      gsap.timeline({
        scrollTrigger: {
          trigger: zoomRef.current,
          scrub: true,
          start: "top top",
          end: "+=1000%",
          pin: true,
        }
      })
      .to(".zoom-circle", { scale: 12 })
      .to(".zoom-content", { scale: 1 }, "<")

    })

    return () => ctx.revert()

  }, [])

  return (
    <>
      {/* LOADING */}
      <div
        ref={loadingRef}
        id="loading-screen"
        className="w-screen h-screen bg-white flex flex-col justify-end items-start absolute top-0"
      >
        <div
          ref={progressBarRef}
          id="progress-bar"
          className="w-0 h-screen absolute bottom-0 bg-white mix-blend-difference"
        ></div>

        <div
          ref={counterRef}
          id="progress-counter"
          className="text-white text-[23vw] mix-blend-difference"
        >
          0%
        </div>
      </div>

      {/* HERO */}
      <div
        ref={heroRef}
        className="hero flex flex-col justify-end items-center h-screen opacity-0"
      >
        <div className="sun flex flex-col items-center relative w-full h-full justify-end">
          <div className="semicircle w-[40%] h-[20vw] bg-white rounded-t-[2000px] absolute bottom-0 mix-blend-difference"></div>
          <div className="line w-screen h-px bg-white"></div>
        </div>
        <div className="road bg-white [clip-path:polygon(50%_0,100%_100%,0_100%)] w-screen h-full relative mix-blend-difference"></div>
      </div>

      {/* HORIZONTAL */}
      <div className="horizontal-container w-full h-[calc(100vh+210vw)] mt-8">
        <div ref={wrapperRef} className="horizontal-wrapper w-full h-[calc(100vh+210vw)]">
          <div ref={horizontalRef} className="horizontal-scroller grid grid-rows-2 gap-1.5 w-full h-screen">

            <div className="flex gap-2">
              <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[2vw] flex flex-col justify-between h-[50vh] w-[50vw] bg-white text-black">
                Horizontal Item
              </div>
               <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[2vw] flex flex-col justify-between h-[50vh] w-[50vw] bg-white text-black">
                Horizontal Item
              </div>
               <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[2vw] flex flex-col justify-between h-[50vh] w-[50vw] bg-white text-black">
                Horizontal Item
              </div>
              <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[2vw] flex flex-col justify-between h-[50vh] w-[50vw] bg-white text-black">
                Horizontal Item
              </div>
              <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[2vw] flex flex-col justify-between h-[50vh] w-[50vw] bg-white text-black">
                Horizontal Item
              </div>
              
            </div>
             <div className="flex gap-2">
              <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[2vw] flex flex-col justify-between h-[50vh] w-[50vw] bg-white text-black">
                Horizontal Item
              </div>
               <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[2vw] flex flex-col justify-between h-[50vh] w-[50vw] bg-white text-black">
                Horizontal Item
              </div>
               <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[2vw] flex flex-col justify-between h-[50vh] w-[50vw] bg-white text-black">
                Horizontal Item
              </div>
              <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[2vw] flex flex-col justify-between h-[50vh] w-[50vw] bg-white text-black">
                Horizontal Item
              </div>
              <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[2vw] flex flex-col justify-between h-[50vh] w-[50vw] bg-white text-black">
                Horizontal Item
              </div>
              
            </div>
            

          </div>
        </div>
      </div>

      {/* ZOOM */}
      <div className="zoom-container h-full w-full flex flex-col items-center relative">
        <div
          ref={zoomRef}
          className="zoom h-screen flex flex-col items-center justify-between w-screen"
        >
          <h2 className="text-white mix-blend-difference text-[6vw]">
            KEEP SCROLLING TO ZOOM
          </h2>

          <div className="zoom-circle h-[30vw] w-[30vw] rounded-full bg-white mix-blend-difference absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          <h3 className="zoom-content text-white mix-blend-difference absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5vw]">
            ZOOM INNN
          </h3>

        </div>
      </div>

      <div className="h-[300vh]"></div>
    </>
  )
}

export default App