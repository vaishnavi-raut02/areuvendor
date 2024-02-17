import React from 'react'
import Image from 'next/image'


const Section6 = () => {
    return (
        <>
        <div className='relative font-serif w-full h-screen '>
        <div className='bg-purple-600 h-4/5 w-4/5 bottom-14 rounded-r-3xl absolute z-1' >
            
        </div>
        

        <div className='absolute  z-10 right-0 top-6'>
        <Image className='rounded-l-3xl'
      src="https://pros.weddingpro.com/wp-content/uploads/2023/10/8_HP_Build-relationships.png"
      width={1085}
      height={0}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

      alt="Picture of the author"
    /> 

        </div>

        <div className='absolute w-[58%] z-[11] bg-white bottom-0 left-12  border border-gray-300 p-10 rounded-xl '>  
            <strong className='text-4xl '>Build relationships with wedding pros and couples </strong> <br />
           
            <p className='mt-6 mr-2 text-lg'>Build relationships with wedding pros and couples 
From showcasing your authentic brand and connecting with new clients to gaining access to exclusive industry events, there are countless opportunities to grow your network. </p>

            <button class=" text-purple-900 py-2 px-4 rounded-3xl mt-10 border border-purple-900 hover:bg-purple-900 hover:text-white"><strong>Join our community</strong></button>

      

        </div>
        </div>
        </>
    )
}

export default Section6