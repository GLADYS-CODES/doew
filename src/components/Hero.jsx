import React from 'react'
import Typed from 'react-typed'
const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
            <p className='text-[#00df9a] font-bold p-2'>
                GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>
                Grow with data</h1>
                
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-6xl text-xl font-bold'>
                    Fast, flexible financing for</p>

            <Typed strings={['BTB', 'BTC', 'SASS']}
            className='md:text-5xl sm:text-6xl text-xl font-bold md:pl-4 pl-2'
            typeSpeed={110}
            backSpeed={90}
            loop
            />
            </div>
            <p className='md:text-1xl  text-xl font-bold text-gray-500'>Monitoring your anayltics to increase revenue for BTB, BTC & SASS plat forms </p>

<button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
</div>



    </div>
  )
}

export default Hero