import React from 'react'
import layer1 from '../assets/images/nextlayer1.png'
import layer2 from '../assets/images/nextlayer2.png'

function Nextsec() {
  return (
    <div className='bg-nextsec d-flex align-items-center justify-content-center position-relative '>
      <div className="container">
        <h2 className='font-roboto fs-xl fw-bold lh-62 text-white text-center pb-3' data-aos="zoom-in">What’s Next</h2>
        <p className='font-roboto fs-s lh-24 fw-semibold text-white text-center' data-aos="zoom-in">92% of gamers have never even tried a Web3 game. We’re going to change that.</p>
        <p className='font-roboto fs-s lh-24 fw-normal off-gray text-center' data-aos="zoom-in">248Labs The market is worth about a gazillion dollars, so whatever those stats were, that goes here.</p>
        <div className='d-flex justify-content-center' data-aos="zoom-in">
          <button className='font-roboto fs-md fw-bold lh-28 text-white common-btn five   border-0'>Try to keep up</button>
        </div>
      </div>
      <img src={layer1} alt="layer" className='position position-absolute next-layer1  w-100' />
      <img src={layer2} alt="layer" className='position position-absolute next-layer2  w-100' />
    </div>
  )
}

export default Nextsec
