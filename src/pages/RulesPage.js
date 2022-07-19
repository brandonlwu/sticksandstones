import '../App.css';
import {dogwagging} from '../index'

function RulesPage() {
  return (
    <div className="container">
        <p className = 'title'>Welcome to Sticks and Stones!</p>
        <div className = 'flexbox'>
            <div className = 'col'>
                <img src = {dogwagging} className = 'mainimg'/>
            </div>
            <div className = 'col'>
                <p>This is Bert the dog</p>
            </div>
        </div>
    </div>
  );
}

export default RulesPage;
