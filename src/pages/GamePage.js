import '../App.css';
import maindog from '../assets/dog.png'
import {stick1, stick2, stick3,
stick4, stick5, stick6, stick7,
stick8, stick9, stick10, stick11,
stick12, stick13, stick14, stick15} from '../index'

const stickRankings = []
for (let i = 0; i < 10; i++) {
    stickRankings.push(Math.floor(Math.random() * 100));
}
console.log(stickRankings)

function GamePage() {
  return (
    <div className="container">
      <div className = 'imgcontainer'>
        <p className = 'title'>Sticks and Stones</p>
        <img src = {maindog} className = 'mainimg'/>
        <p>{stickRankings}</p>
      </div>
    </div>
  );
}

export default GamePage;
