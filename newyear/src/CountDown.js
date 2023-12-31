import React, { useEffect, useState } from 'react'
import './CountDown.css'


const CountDown = ({newYear}) => {
  
    const [days,setDays]=useState(0);
    const [hours,setHours]=useState(0);
    const [minutes,setMinutes]=useState(0);
    const [seconds,setSeconds]=useState(0);

    useEffect(()=>{
      const timerId = setInterval(()=>{
        const now = new Date().getTime()
        const distance = (newYear-now)/1000;
        if(distance>0){
          const days = Math.floor(distance/60/60/24);
          const hours = Math.floor(distance/60/60 %24);
          const minutes = Math.floor((distance/60)%60);
          const seconds = Math.floor(distance%60);
          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
        }
      },1000)
      return ()=> clearInterval(timerId);
    },[newYear])

  return (
    <div className='d-flex flex-column text-center'>
      
<div className="text-center">
 <h1 id="text"> ⋆✩  🎀  𝒞❤️𝓊𝓃𝓉𝒟☯𝓌𝓃  🎀  ✩⋆</h1>
</div>

<div className="container-fluid text-center d-flex object-fit-cover ">

<div className="card glass mx-2 object-fit-cover  ">
  <h2 id='counterHeading'>
  {days}
  </h2>
  <div class="card-body">
    <p class="card-text counterText">Days</p>
  </div>
</div>
<div className="card glass mx-2 object-fit-cover ">
  <h2 id='counterHeading'>
  {hours}
  </h2>
  <div class="card-body">
    <p class="card-text counterText">Hours</p>
  </div>
</div>
<div className="card glass mx-2">
  <h2 id='counterHeading'>
  {minutes}
  </h2>
  <div class="card-body">
    <p class="card-text counterText">Minutes</p>
  </div>
</div>
<div className="card glass mx-2">
  <h2 id='counterHeading'>
  {seconds}
  </h2>
  <div class="card-body">
    <p class="card-text counterText">Seconds</p>
  </div>
</div>

</div>
    
    </div>
  )
}

export default CountDown
