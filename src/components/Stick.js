import {dogwagging, stick1, bone,
    stick2, stick3, stick4, stick5,
    stick6, stick7, stick8, stick9,
    stick10, stick11, stick12, stick13,
    stick14, stick15, stickArr
} from '../index'
import '../App.css';



function Stick(props) {
    return(
        <div>
            <img src = {stickArr[props.stick]} className = 'mainimg'/>
            <div className='center'>
                <p className='bonerating'>{props.rating}</p>
                <img src = {bone} className = 'boneimg'/>
            </div>
        </div>
    )
}

export default Stick;