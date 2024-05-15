import { FaPen } from 'react-icons/fa'
import Icon from '../Icon/Icon.jsx'
import './card.css'
import {memo} from 'react'
function Card({gameEnd,onPlay,player,index}){
        let icon=<Icon />
        if(player=='X'){
                icon=<Icon name={"cross"}/>
        }
        else if(player=="O"){
            icon=<Icon name={"circle"}/>
        }
        
    
    
return (


    <div className="card" onClick={()=>{!gameEnd && player=="" && onPlay(index)}}>
   
    {icon}
    </div>
)
}
export default memo(Card);