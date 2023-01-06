import './App.css';
import './index.css'
import React, { useEffect, useState } from 'react'
import bgimg from './images/pokeball.png';
import Pokedex from './Pokedex';

function App() {
  window.onscroll = ()=>{
    let topDistance = document.documentElement.scrollTop / 5;
    document.getElementById('bgimg').style.transform='rotate('+ topDistance +'deg)'
  }
  ///////loading animation
  const [loader,setLoader]=useState('hideLoader');
  const loading = ()=>{
    setLoader('loader')
  }
  const hideLoading = ()=>{
    setLoader('hideLoader')
  }
  ///////////////////
  ///////loading animation
  const loadingAnimation = ()=>{
      loading();
      setTimeout(()=>{
        hideLoading()
      },1000)
  }
  useEffect(()=>{loadingAnimation()})
  return (
    <div className="App">
      <div className={loader}></div>
      {/* background pokeball */}
      <div className='bgimgbox'>
        <img className='bgimg' alt='bgimg' src={bgimg} id='bgimg'/>
      </div>
      <Pokedex />
    </div>
  );
}

export default App;
