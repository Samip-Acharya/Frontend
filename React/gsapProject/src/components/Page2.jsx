import React, { useRef } from 'react'
import Card from './Card';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Page2 = () => {
    const boxRef = useRef(null)
    const cards = [
  {
    title: "Search engine optimization",
    imgSrc: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pay per click advertisement",
    imgSrc: "https://images.unsplash.com/photo-1762330464824-21e95b769038?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Social media marketing",
    imgSrc: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "E-mail marketing",
    imgSrc: "https://images.unsplash.com/photo-1533750446969-255bbf191920?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Content marketing",
    imgSrc: "https://images.unsplash.com/photo-1676276375742-9e3d10e39d45?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Influencer marketing",
    imgSrc: "https://images.unsplash.com/photo-1557840343-364332b5469a?auto=format&fit=crop&w=1200&q=80",
  },
];
    useGSAP(()=>{ 
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger: boxRef.current,
                start: "top 80%",
                end: "top -20%",
                scrub:2
            }
        })
        for(let i = 0; i<cards.length; i++){
            const row = Math.floor(i/2)
            const col = i%2
            tl.from(`.row_${row}.col_${col}`,{
                x: col==0 ? -200 :200,
                opacity:0
            },`line_${row}`)
        }
    })
  return (
    <div ref={boxRef} className='flex flex-wrap justify-between content-between h-215'>
       {cards.map((elem,idx)=>{
        return <Card key={idx} title={elem.title} imgSrc={elem.imgSrc} number={idx}/>
       })}
    </div>
  )
}

export default Page2