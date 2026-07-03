import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Page1 = () => {
    const leftBoxRef = useRef(null) 
    const imageRef = useRef(null)
     const lastTimeRef = useRef(0)
    const particleBoxRef = useRef(null)
    const logosRef = useRef(null)
    useGSAP(()=>{
        var tl = gsap.timeline()
        tl.from(leftBoxRef.current.children,{
            delay:2,
            duration:0.4,
            stagger:0.4,
            x : -30,
            opacity:0
        })
        tl.from(imageRef.current,{
            duration:0.4,
            x : 30,
            opacity:0
        })
        tl.from(logosRef.current.children,{
          duration:0.3,
          stagger:0.3,
          opacity:0,
          y:10
        })
    })
    const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "pink",
    "yellow",
    "cyan",
    "lime",
    "indigo",
    "violet",
    "teal",
    "coral",
    "salmon",
    "gold",
    "tomato",
    "crimson",
    "navy",
    "brown",
    "black",
];
      const generateParticle = (e)=>{
        const now = Date.now()
        if(now-lastTimeRef.current <200)return;
        lastTimeRef.current = now
        const particle = document.createElement('span')
        const box  = particleBoxRef.current
        const rect = box.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        particle.className = `h-4 w-4 absolute pointer-events-none`
        const randomColor = colors[Math.floor(Math.random()*colors.length)]
        const borderRadius = Math.floor(Math.random()*20)
        particle.style.left =  `${x}px`
        particle.style.top = `${y}px`
        particle.style.backgroundColor = randomColor
        particle.style.borderRadius = `${borderRadius}px`
        box.appendChild(particle)
        gsap.to(particle,{
            y:gsap.utils.random(-400,400),
            x:gsap.utils.random(-400,400),
            opacity:0,
            delay:gsap.utils.random(0.1,0.3),
            duration:5,
            scale:0,
            onComplete:()=>particle.remove()
        })

  }
  const handleMouseMove = (e) => {
    const img = imageRef.current;
    const rect = img.getBoundingClientRect();

    const imgCenterX = rect.left + rect.width / 2;
    const imgCenterY = rect.top + rect.height / 2;

    const mouseX = e.clientX - imgCenterX;
    const mouseY = e.clientY - imgCenterY;

    const rotateY = mouseX / 20;
    const rotateX = -mouseY / 20;

    gsap.to(img, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };


  return (
    <>
      <div className='h-[65vh] mt-5 flex'>
          <div ref={leftBoxRef} className='w-1/3 h-full flex flex-col justify-between py-20'>
              <h2 className='text-6xl font-bold leading-tight'>Navigating the digital landscape for success</h2>
              <div>
              <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati corporis officiis non, accusantium reiciendis repellendus aliquid eveniet alias beatae animi porro nesciunt sunt rerum tenetur, explicabo dicta impedit facere optio.</p>
              <button className='mt-3 bg-black text-white font-semibold text-lg px-4 py-2 rounded-lg cursor-pointer active:scale-95'>Book a consultation</button>
              </div>
          </div>
          <div  ref={particleBoxRef} onMouseMove={generateParticle} className='w-2/3 h-full relative flex justify-end items-center perspective-[1000px] overflow-hidden'>
              <img onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={imageRef} src="https://clee-es.com/Hero.svg" className='w-[35vw] h-[35vw]  object-contain object-center'/>
          </div>
      </div>
      <div ref={logosRef} className='flex justify-between items-center'>
        <img className='h-40 w-40 object-contain pt-4' src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-black-transparent.png" alt="" /><img className='h-40 w-40 object-contain' src="https://wp.logos-download.com/wp-content/uploads/2016/09/Dribbble_logo.png?dl" alt="" /><img className='h-40 w-40 object-contain' src="https://www.mac-group.com/wp-content/uploads/2018/02/Hubspot.png" alt="" /><img className='h-40 w-40 object-contain' src="https://get.site/wp-content/uploads/2021/10/notion-logo.png" alt="" /><img className='h-40 w-40 object-contain' src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-black-png-900x244.png" alt="" />
      </div>
    </>
  )
}

export default Page1