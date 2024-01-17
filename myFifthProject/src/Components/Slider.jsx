import React from 'react'
import slid_1 from "../assets/noon/slider_1.avif"
import slid_2 from "../assets/noon/slider_2.avif"
import slid_3 from "../assets/noon/slider_3.gif"
import slid_4 from "../assets/noon/slider_4.avif"
import slid_5 from "../assets/noon/slider_5.avif"
import slid_6 from "../assets/noon/slider_6.avif"
import slid_7 from "../assets/noon/slider_7.avif"
import slid_8 from "../assets/noon/slider_8.avif"
import adverstiment from "../assets/noon/combineadver.png"
// import adverstiment_2 from "../assets/noon/advr_2.avif"

const CarouselCustomNavigation = () => {
  return (
   <>
   <div className='flex pb-3'>
   <div className="carousel w-3/4">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={slid_1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide8" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={slid_2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={slid_3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide4" className="carousel-item relative w-full">
    <img src={slid_4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src={slid_5} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img src={slid_6} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide7" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide7" className="carousel-item relative w-full">
    <img src={slid_7} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-circle">❮</a> 
      <a href="#slide8" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide8" className="carousel-item relative w-full">
    <img src={slid_8} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide7" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>


</div>
<div className='w-1/4  		' >
    <img className='h-full' src={adverstiment} />
   


</div>
</div>
   
   
   </>
  )
}


export {CarouselCustomNavigation}