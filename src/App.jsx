import './App.css'
import gsap from 'gsap'
import { useRef, useLayoutEffect } from 'react'
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

  const textRef = useRef(null)
  const itRef = useRef(null)
  const fizzRef = useRef(null)
  

  //comments are present to identify each section in animation for ease in development

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      //loading
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

      //horizontal scroll
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

      gsap.to(textRef.current, {
  x:150,
  y: 150,          
  opacity: 0,
  ease:"back.in",
  scrollTrigger: {
    trigger: wrapperRef.current,
    start: "top top",
    scrub: 0.5,
    end: "+=" + container * 0.3,  
  }
})

gsap.from(itRef.current, {
  x: -250,
  y: -100,
  opacity: 0,
  ease: "back.in",
  scrollTrigger: {
    trigger: wrapperRef.current,
    start: "top top",
    scrub: 0.5,
    end: "+=" + containerWidth * 0.3,
  }
})


      //zoom section
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
              <div  className="p-[5vw] border-[5px] border-white rounded-[5vw]  flex flex-col justify-between h-[50vh] w-[50vw] bg-[#c0f403]  text-[#222222]">
                <p ref={textRef} className='text-[100px]'>WELCOME</p>
              </div>
               <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[45px] flex flex-col justify-between h-[50vh] w-[50vw] bg-[#222222] text-[#c0f403]">
                SOCIAL MEDIA MARKETING
                <p className='text-[20px]'>Harness the power of social platforms to engage your audience and build meaningful connections. Our SMM
            experts craft targeted campaigns on Instagram, Facebook, LinkedIn, and more to grow your brand organically
            and through paid strategies.</p>
              </div>
               <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[50px] flex flex-col justify-between h-[50vh] w-[50vw] bg-[#c0f403] text-black">
                WEB DEVELOPMENT
                <p className='text-[20px]'>Create a seamless user experience with custom websites designed to convert. Our development team builds
            responsive, high-performance websites optimized for both desktop and mobile users.</p>
              </div>
              <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[60px] flex flex-col justify-between h-[50vh] w-[50vw] bg-[#222222] text-[#c0f403]">
                ELEVATE YOUR DIGITAL STRATEGY
              </div>
              
              <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[70px] flex flex-col justify-between h-[50vh] w-[50vw] bg-[#c0f403] text-[#c0f403]">
                
              </div>
              
              
            </div>
             <div className="flex gap-2">
              <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[50px] flex flex-col justify-between h-[50vh] w-[50vw] bg-[#222222] text-[#c0f403]">
                SEARCH ENGINE OPTIMIZATION
                <p className='text-[20px]'>Drive organic traffic with a proven SEO strategy that focuses on on-page optimization, quality backlinks,
            and
            technical SEO. From keyword research to content marketing, we ensure your website ranks at the top of search
            engine results.</p>
              </div>
               <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[2vw] flex flex-col justify-between h-[50vh] w-[50vw] bg-[#c0f403] text-[#222222]">
                <p ref={itRef} className='text-[100px]'>ITZFIZZ</p>
              </div>
               <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[50px] flex flex-col justify-between h-[50vh] w-[50vw] bg-[#222222] text-[#c0f403]">
                UI/UX DESIGN
                <p className='text-[20px]'>Our UI/UX design services focus on creating intuitive, user-centric designs that not only look great but
            also deliver superior usability and functionality. From wireframes to prototypes, we bring your vision to
            life.</p>
              </div>
              <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[50px] flex flex-col justify-between h-[50vh] w-[50vw] bg-[#c0f403] text-black">
                BRANDING
                <p className='text-[20px]'>Establish a brand identity that resonates. From logo creation to full rebranding strategies, we help
            businesses create a lasting impression in the minds of their audience</p>
              </div>
              
              <div className="p-[5vw] border-[5px] border-white rounded-[5vw] text-[70px] flex flex-col justify-between h-[50vh] w-[50vw] bg-[#222222] text-[#c0f403]">
                
              </div>
              
            </div>
            

          </div>
        </div>
      </div>

      {/* ZOOM SECTION*/}
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