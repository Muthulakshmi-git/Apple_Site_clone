import React, {useState, useEffect } from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'

let images = [
    {source:img1},
    {source:img2},
    {source:img3},
    {source:img4},
    {source:img5},
]

const MovingBanner = () => {
    const [current, setCurrent] = useState(0);

  // Auto change banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 10000) // 1 minute

    return () => clearInterval(interval)
  }, [])
  return (
    <div>
        <img
        className='w-full px-10 mt-10 transition-all duration-700'
        src={images[current].source}
        alt="banner"
      />
    </div>
  )
}

export default MovingBanner