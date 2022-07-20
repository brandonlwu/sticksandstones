import '../App.css';
import maindog from '../assets/dog.png'

const stickRankings = []
for (let i = 0; i < 10; i++) {
    stickRankings.push(Math.floor(Math.random() * 100));
}
console.log(stickRankings)

function GamePage() {
  return (
    <div className="container">
      <div className = 'imgcontainer'>
        <p className = 'title'>Sticks and Bones</p>
        <img src = {maindog} className = 'mainimg'/>
        <p>{stickRankings}</p>
      </div>
    </div>
  );
}

export default GamePage;
