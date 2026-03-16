import React from 'react'

const Banner = () => {
  return (
    <div className='z-20 bg-blue-950 max-w-full min-h-screen flex justify-center items-end pb-16'>
      <div className='text-center'> 
        <h1 className='text-6xl  text-white font-bold'>Where ideas dazzle.</h1>
      <p className='text-2xl font-bold my-5  text-white'>Apple Borivali is now open.</p>
      <button className='bg-blue-600 text-white px-8 py-2 rounded-full'>Learn More</button>
      </div>
    </div>
  )
}

export default Banner