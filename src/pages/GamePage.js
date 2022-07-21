import '../App.css';
import dogwagging from '../assets/dogwagging.png'
import Stick from '../components/Stick'
import SmallStick from '../components/SmallStick';
import React, { useState } from 'react';
import { useSticks } from '../SticksContext';
import { useNavigate } from "react-router-dom";


// const stickImages = []
// const floor = Math.floor(Math.random() * 100)
// const variability = Math.floor(Math.random() * 90) + 10
// for (let i = 0; i < 10; i++) {
//     stickImages.push([Math.floor(Math.random() * variability) + floor, Math.floor(Math.random() * 14)]);
// }
// console.log(stickImages)

function GamePage() {
  // const [stick, updateStick] = useState(0)
  var {stickImages, floor, variability, stick, updateStick, selectedStick, updatedSelectedStick} = useSticks()
  function updateGameState() {
    if (stick < 9)
    updateStick(stick+1)
  }
  let navigate = useNavigate();

  const previousSticks = (
    <div className = 'absolute-top'>
    <p className='rules'>Previous Sticks</p>
      <div className='flexbox'>
      <div>
        {stick < 5 ? 
        stickImages.slice(0,stick).map((elem) => <SmallStick rating = {elem[0]} stick = {elem[1]}/>)
        :
        stickImages.slice(0,5).map((elem) => <SmallStick rating = {elem[0]} stick = {elem[1]}/>)
        }
      </div>
      <div>
        {stick >= 5 ? 
        stickImages.slice(5,stick).map((elem) => <SmallStick rating = {elem[0]} stick = {elem[1]}/>)
        :
        null}
    </div>
    </div>
  </div>
  )

  return (
    <div className="container">
      <div className = 'imgcontainer'>
        <p className = 'title'>You come across stick {stick+1}</p>
        <Stick rating = {stickImages[stick][0]} stick = {stickImages[stick][1]}/>
        {previousSticks}
        <img src = {dogwagging} className = 'dogsmall'/>
        <div>
        <button className = 'nextButtonSmall marginbottom' onClick = {()=> updateGameState()}>Next stick</button>
        <button className = 'nextButtonSmall' onClick = {()=> {updatedSelectedStick(stick); navigate('/conclusion')}}>Choose this stick</button>
        
        </div>
      </div>
    </div>
  );
}

export default GamePage;
