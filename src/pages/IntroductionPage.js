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
                <p className = 'rules'>Say hello to Alfred the Ainu! Alfred lovesssssss sticks but he is an extremely picky dog.
                Today your task is to help him find the best stick he possibly can. If he likes the stick, he will file
                your taxes for you. If you fail, you will be sacrificed. immediately. </p>
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
