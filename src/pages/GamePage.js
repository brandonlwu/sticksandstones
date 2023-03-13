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
  const [selected, setSelected] = useState(false)

  var {stickImages, floor, variability, stick, updateStick, selectedStick, updatedSelectedStick} = useSticks()
  function updateGameState() {
    if (stick < 9) {
      updateStick(stick+1)
    } else {
      if (selected) {
        navigate('/conclusion')
      }
    }
  }
  let navigate = useNavigate();

  const previousSticks = (
    <div className = 'absolute-top'>
    <p className='rules'>Sticks you passed</p>
      <div className='stickflexbox'>
      <div className = 'stickitem'>
        {stick < 5 ? 
        stickImages.slice(0,stick).map((elem) => <SmallStick rating = {elem[0]} stick = {elem[1]}/>)
        :
        stickImages.slice(0,5).map((elem) => <SmallStick rating = {elem[0]} stick = {elem[1]}/>)
        }
      </div>
      <div className = 'stickitem'>
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
        { stick == 9 ?
          <p className = 'title'>This is the last stick, stick {stick+1}</p>
          :
          <p className = 'title'>This is stick {stick+1}</p>
        }
        <Stick rating = {stickImages[stick][0]} stick = {stickImages[stick][1]}/>
        <img src = {dogwagging} className = 'dogsmall'/>
        <div>
        <button className = 'nextButtonSmall marginbottom' disabled = {stick == 10} onClick = {()=> updateGameState()}>{stick < 9 ? 'Next stick' : 'Finish game'}</button>
        <button className = 'nextButtonSmall' disabled = {selected} onClick = {()=> {updatedSelectedStick(stick); setSelected(true)}}>Choose this stick</button>
        { selected ?
          <p className = 'note-text'>You chose stick {selectedStick+1}</p>
          :
          null
        }
        </div>
        {previousSticks}
      </div>
    </div>
  );
}

export default GamePage;
