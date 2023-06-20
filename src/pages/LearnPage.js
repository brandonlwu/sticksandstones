import '../App.css';
import {dogwagging} from '../index'
import { useNavigate } from "react-router-dom";

function LearnPage() {
let navigate = useNavigate();
  return (
    <div className="container">
      <div className = 'imgcontainer'>
        <p className = 'title'>The 37% Rule</p>
        <img src = {dogwagging} className = 'mainimg'/>
        <p className = 'rules'>
          At first glance this game appears random. There's no knowing at which point the best stick will appear!<br></br><br></br>
          
          But Ainu is actually facing a classic explore-exploit problem. In other words, Ainu must decide how much time he will
          spend exploring his options and at what point he will start exploiting his options. For Ainu, "exploring" would mean 
          encountering as many sticks as possible to gain a better sense of what type of sticks he likes. "Exploiting" would mean
          making a decision and actually enjoying one of the sticks he comes across. But Ainu can't go back to sticks he has already
          passed so the dilemma becomes: when should he stop exploring and start exploiting.
          <br></br><br></br>
          
          Let's say Ainu never explores and picks the first stick he encounters. He never gets the chance to explore 
          and gain a sense of what he likes and doesn't like. There could very well be sticks in the future that he would actually like a lot more, 
          but he'll never encounter. 
          
          <br></br><br></br>

          Conversely, if Ainu spends all his time exploring and never makes a decision until the last possible stick, there's a good chance 
          he will have passed the stick that he ends up liking the most. <br></br><br></br>

          So the question then is how does Ainu optimize his odds of choosing the best possible stick? Mathameticians have an answer and it's
          called the 37% rule.
          <br></br><br></br>

          From a high level, it means the first 37% of your decision-making process should be gathering information and committing 
          to nothing. After that period, choose the next option that comes along that's better than everything you've seen before.<br></br><br></br>
          
          In Ainu's case, that would mean always passing the first 3 sticks (we take the floor of the percentage), but keeping note of their
          rankings. He should then choose the next best stick that comes along. 
          <br></br><br></br>

          There is always the possibility that the best stick is among the first 3 sticks he encounters or right after the "next best stick" Ainu
          chooses. But if we were to play this game repeatedly, this strategy would have the highest odds of getting Ainu the best stick.
          <br></br><br></br>

          What is its application? Some mathematicians suggest the 37% rule for any major decision you make in your life, such as buying a home 
          or getting married. Most people don't know what they are looking for in a home or a relationship until they've had the chance to explore
          and gain a sense of what they like. So according to the 37% rule if you have 100 home viewings lined up, you would purely observe the first 37
          and immediately purchase the next best home that you come across. Or say if you plan to have settled down by 40 and start dating in high school,
          don't accept any suitors until around 25.
          <br></br><br></br>

          Obviously, real life is much more complicated and there is never one-size-fits-all rule. My high school math teacher first met his wife in elementary
          school and they've been married for over 50 years now. I'm pretty sure he wasn't thinking of the 37% rule. Regardless, it is
          an interesting thought concept that can factor into your decision making process. 
          <br></br><br></br>

          So now that you know this, why don't you give the game another shot and help Ainu find that best stick.
          <br></br><br></br>

          </p>
        <button className = 'nextButtonSmall'
                  onClick={()=> {navigate('/');}}>
                      Back home →
                </button>
      </div>
    </div>
  );
}

export default LearnPage;
