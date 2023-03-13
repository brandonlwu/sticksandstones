import '../App.css';
import {dogwagging, stick1, bone} from '../index'
import { useNavigate } from "react-router-dom";
import Stick from '../components/Stick';

function RulesPage() {
  let navigate = useNavigate();
  return (
    <div className="container">
        <p className = 'title'>Here are the rules</p>
        <div className = 'flexbox'>
            <Stick rating = {78} stick = {1}/>
            <div>
                <p className = 'rules'>As you walk on this trail with Alfred, you will encounter 10 sticks.</p>
                <ul>
                  <li className='rules bullet'>The goal of the game is the find the best possible stick for Alfred</li>
                  <li className='rules bullet'>Each stick will have a number which represents its quality</li>
                  <li className='rules bullet'>The higher the number, the better quality of the stick</li>
                  <li className='rules bullet'>Once Alfred chooses a stick, he has to stick with it (even if a better stick comes along in the future)</li>
                  <li className='rules bullet'>Once you pass a stick, you can't go back (so who knows, the first stick you come across could be the best)</li>
                  <li className='rules bullet'>The quality of each stick is random</li>
                </ul>
            </div>
        </div>
        <img src = {dogwagging} className = 'dogsmall'/>
        <button className = 'nextButtonSmall'
          onClick={()=> {navigate('/game');}}>
          Got it! Let's play →
        </button>
        
    </div>
  );
}

export default RulesPage;
