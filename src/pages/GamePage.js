import '../App.css';
import maindog from '../assets/dog.png'
import Stick from '../components/Stick'
import React, { useState } from 'react';

const stickRankings = []
const stickImages = []
for (let i = 0; i < 10; i++) {
    stickRankings.push(Math.floor(Math.random() * 100));
    stickImages.push(Math.floor(Math.random() * 14));
}
console.log(stickRankings)

function GamePage() {
  const [stick, updateStick] = useState(0)

  function updateGameState() {
    if (stick < 9)
    updateStick(stick+1)
  }

  return (
    <div className="container">
      <div className = 'imgcontainer'>
        <Stick rating = {stickRankings[stick]} stick = {stickImages[stick]}/>
        <p>{stickRankings}</p>
        <button onClick = {()=> updateGameState()}>Next</button>
      </div>
    </div>
  );
}

export default GamePage;
