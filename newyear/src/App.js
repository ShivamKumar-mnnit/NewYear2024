import React from 'react';
import './App.css';
import Snowflake from './Snowflake';
import CountDown from './CountDown';
import Wish from './Wish';

function App() {
  const snow=()=> {
    let animationDelay = '0s';
    let fontSize = '100px';
    let arr = Array.from('Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!')
     return arr.map((el, i) => {
      animationDelay = `${(Math.random()*16).toFixed(2)}s`;
      fontSize = `${(Math.floor(Math.random()*10) + 10)}px`;
      let style = {
        animationDelay,
        fontSize
      }
      return (<Snowflake key={i} id={i} style={style}/>)
     })
  }

    const newYear = new Date("Jan 1, 2024").getTime();
    
  return (
    <>
   <div className='App container-fluid'>
   {snow()}
   <Wish/>
   {snow()}
   <CountDown newYear={newYear}/>
  
    </div>

   </>
  );
}

export default App;
