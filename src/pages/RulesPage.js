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
                <p className = 'rules'>As you walk on this trail with Albie, you will encounter 10 sticks.</p>
                <ul>
                  <li className='rules bullet'>The goal of the game is the find the best stick possible for Albie.</li>
                  <li className='rules bullet'>The stick's quality is determined by Albie's rating of the stick.</li>
                  <li className='rules bullet'>The higher the rating, the better the stick.</li>
                  <li className='rules bullet'>With each stick, you have the choice of keeping it or passing on.</li>
                  <li className='rules bullet'>Once you choose to keep a stick, the game is over.</li>
                  <li className='rules bullet'>Once you pass a stick, you can't go back.</li>
                  <li className='rules bullet'>The quality of each stick is random.</li>
                </ul>
                <button className = 'nextButtonSmall'
                  onClick={()=> {navigate('/game');}}>
                      Got it! →
                </button>
            </div>
        </div>
    </div>
  );
}

export default RulesPage;
