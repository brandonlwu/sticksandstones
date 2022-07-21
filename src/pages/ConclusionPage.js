import '../App.css';
import {dogwagging, dogsad} from '../index'
import { useNavigate } from "react-router-dom";
import { useSticks } from '../SticksContext';
import SmallStick from '../components/SmallStick';
import Stick from '../components/Stick';
import ConclusionStick from '../components/ConclusionStick';

function ConclusionPage() {
let navigate = useNavigate();
var {stickImages, floor, variability, stick, updateStick, selectedStick, updatedSelectedStick} = useSticks()

const stickRatingArray = stickImages.map((elem) => elem[0])
const maxRating = Math.max(...stickRatingArray)
console.log(stickRatingArray)
console.log(maxRating)

const previousSticks = (
    <div className = 'absolute-top'>
    <p className='rules text-center'>Sticks</p>
      <div className='flexbox'>
      <div>
        {stickImages.slice(0,5).map((elem) => <SmallStick rating = {elem[0]} stick = {elem[1]}/>)}
      </div>
      <div>
      {stickImages.slice(5,10).map((elem) => <SmallStick rating = {elem[0]} stick = {elem[1]}/>)}
      </div>
    </div>
    </div>
  )

  return (
    <div className="container">
      <div className = 'imgcontainer'>
        <p className = 'title'>You chose stick {selectedStick+1}</p>
        {stickImages[selectedStick][0] >= maxRating ? <img src = {dogwagging} className = 'mainimg'/>: <img src = {dogsad} className = 'mainimg'/>}
        <ConclusionStick rating = {stickImages[stick][0]} stick = {stickImages[stick][1]}/>
        {previousSticks}
        <div className = 'buttoncontainer'>
        {stickImages[selectedStick][0] >= maxRating ? <p className = 'rules'>Congrats! You found the best stick!</p> : <p className = 'rules'>The stick you chose was not the best :(</p>}
        <button className = 'nextButtonSmall inline' onClick={()=> {navigate('/rules');window.location.reload(false);}}>Play again</button>
        <button className = 'nextButtonSmall inline' onClick={()=> {navigate('/learn');window.location.reload(false);}}>Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default ConclusionPage;
