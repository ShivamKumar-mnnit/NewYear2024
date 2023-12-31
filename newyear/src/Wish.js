import React from 'react'
// import './Wish.css';
import bg1 from './images/bg2.jpg'
const Wish = () => {
  return (
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={bg1} class="d-block w-100" alt="..."/>
    </div>
    <div className='text-center'>
      <h2 className='glass'>🎀2024🎀</h2>
    </div>
  </div>
</div>
    
  )
}

export default Wish
