import '../App.css';
import {dogwagging} from '../index'
import { useNavigate } from "react-router-dom";

function LandingPage() {
let navigate = useNavigate();
  return (
    <div className="container">
      <div className = 'imgcontainer'>
        <p className = 'title'>Sticks and Stones</p>
        <img src = {dogwagging} className = 'mainimg'/>
        <button className = 'nextButton'
        onClick={()=> {navigate('/rules');}}>
            Let's get started!
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
