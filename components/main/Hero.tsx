import React from 'react'

function Hero() {
  return (
    <div className='realtive flex flex-col h-full w-full'>
        <video 
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-340px] left-o z-[1] w-full h-full object-cover'
        >
          <source src='./blackhole.webm' type='video/webm'/>
        </video>
    </div>
  )
}

export default Hero