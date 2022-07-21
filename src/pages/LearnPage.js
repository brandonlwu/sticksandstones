import '../App.css';
import {dogwagging} from '../index'
import { useNavigate } from "react-router-dom";

function LearnPage() {
let navigate = useNavigate();
  return (
    <div className="container">
      <div className = 'imgcontainer'>
        <p className = 'title'>37% rule proof and thoughts coming soon</p>
        <img src = {dogwagging} className = 'mainimg'/>
        <button className = 'nextButtonSmall'
                  onClick={()=> {navigate('/');}}>
                      Back home →
                </button>
      </div>
    </div>
  );
}

export default LearnPage;
