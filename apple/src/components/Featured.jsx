import React from 'react'
import img6 from '../images/img6.png'

const Featured = () => {
  return (
    <div className='mt-2 text-center'>
        <div style={{backgroundColor:"#F5F5F7", paddingTop:"32px" }} >
            <h1 className='font-semibold text-3xl'>iPhone 17e</h1>
            <p className='text-xl mt-2'>Feature stacked. Value packed</p>
            <button className='bg-blue-500 px-3 text-white rounded-full font-semibold py-2 mt-5'>Learn more</button>
            <button className='ml-10 border border-blue-600 px-5 py-1 rounded-full text-blue-500 hover:text-white hover:bg-blue-500'>Buy</button>
        </div>
        <img src={img6} alt="" />
    </div>
  )
}

export default Featured