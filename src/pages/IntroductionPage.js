import '../App.css';
import {dogwagging, stick1} from '../index'
import { useNavigate } from "react-router-dom";

function IntroductionPage() {
  let navigate = useNavigate();
  return (
    <div className="container">
        <p className = 'title'>Welcome to Sticks and Bones!</p>
        <div className = 'flexbox'>
            <div>
                <img src = {dogwagging} className = 'mainimg'/>
            </div>
            <div>
                <p className = 'rules'>Say hello to Alfred the Ainu! Alfred loves sticks but he is also an extremely picky dog.
                He wants to find the best stick he can possibly find and today you are going to help him out.
                  </p>
                <img src = {stick1} className = 'subimg'/>
                <button className = 'nextButtonSmall'
                  onClick={()=> {navigate('/rules');}}>
                      Let's go →
                </button>
            </div>
        </div>
    </div>
  );
}

export default IntroductionPage;
