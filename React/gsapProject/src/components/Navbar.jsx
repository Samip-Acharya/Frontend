import React, { useRef, useState } from 'react'
import { Sparkle } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
    const leftBoxRef = useRef(null)
    const rightBoxRef = useRef(null)
    const lastTimeRef = useRef(0)
    const particleBoxRef = useRef(null)
  useGSAP(()=>{
    var tl = gsap.timeline()
    tl.from(leftBoxRef.current.children,{
        delay:1,
        y:-10,
        opacity:0,
        duration:0.3,
        stagger:0.3,
        delay:0.2
    })
     tl.from(rightBoxRef.current.children,{
        y:-10,
        opacity:0,
        duration:0.3,
        stagger:0.3,
    })
  })
  
  const generateParticle = (e)=>{
        const now = Date.now()
        if(now-lastTimeRef.current <100)return;
        lastTimeRef.current = now
        const particle = document.createElement('span')
        const box  = rightBoxRef.current
        const rect = box.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        particle.className = `bg-[#98a004] h-2 w-2 rounded-full absolute pointer-events-none`
        particle.style.left =  `${x}px`
        particle.style.top = `${y}px`
        particleBoxRef.current.appendChild(particle)
        gsap.to(particle,{
            y:gsap.utils.random(-100,100),
            x:gsap.utils.random(-100,100),
            opacity:0,
            delay:gsap.utils.random(0.3,0.6),
            duration:5,
            scale:0,
            onComplete:()=>particle.remove()
        })

  }
  return (
    <div className='flex justify-between items-center'>
        <div ref={leftBoxRef} className='flex gap-3 h-fit w-fit items-center'> 
            <Sparkle fill='black' size={50} className='rotate-45'/>
            <h1 className='text-3xl font-bold'>WizardZ</h1>
        </div>
        <div ref={rightBoxRef} className='navoptions flex gap-4 items-center relative'>
            <div ref={particleBoxRef} className='absolute h-full w-full top-0 left-0 pointer-events-none'></div>
            <h3 onMouseMove={(e)=>{generateParticle(e)}} className='text-base font-bold cursor-pointer relative overflow-hidden border border-gray-400'><span className='relative z-20'>About us</span></h3>
            <h3 onMouseMove={(e)=>{generateParticle(e)}} className='text-base font-bold cursor-pointer relative overflow-hidden border border-gray-400'><span className='relative z-20'>Services</span></h3>
            <h3 onMouseMove={(e)=>{generateParticle(e)}} className='text-base font-bold cursor-pointer relative overflow-hidden border border-gray-400'><span className='relative z-20'>Use Cases</span></h3>
            <h3 onMouseMove={(e)=>{generateParticle(e)}} className='text-base font-bold cursor-pointer relative overflow-hidden border border-gray-400'><span className='relative z-20'>Pricing</span></h3>
            <h3 onMouseMove={(e)=>{generateParticle(e)}} className='text-base font-bold cursor-pointer relative overflow-hidden border border-gray-400'><span className='relative z-20'>Blog</span></h3>
            <h3 onMouseMove={(e)=>{generateParticle(e)}} className='text-base font-bold cursor-pointer relative overflow-hidden border-black border-2 rounded-md py-2 px-4'><span className='relative z-20'>Request a quote</span></h3>
        </div>
    </div>
  )
}

export default Navbar