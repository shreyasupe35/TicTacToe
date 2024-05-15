import React, { useCallback } from 'react';
import { useState} from "react";
import Card from "../Card/Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './grid.css';
function isWinner(board,symbol){
        if(board[0]==board[1]&&board[1]==board[2]&&board[2]==symbol) return true
        if(board[3]==board[4]&&board[4]==board[5]&&board[5]==symbol) return true
        if(board[6]==board[7]&&board[7]==board[8]&&board[8]==symbol) return true


        if(board[0]==board[3]&&board[3]==board[6]&&board[6]==symbol) return true
        if(board[1]==board[4]&&board[4]==board[7]&&board[7]==symbol) return true
        if(board[2]==board[5]&&board[5]==board[8]&&board[8]==symbol) return true

        if(board[0]==board[4]&&board[4]==board[8]&&board[8]==symbol) return true
        if(board[2]==board[4]&&board[4]==board[6]&&board[6]==symbol) return true

        return false;
       

}

function Grid({numberOfCards}){
    const [turn,setTurn]   = useState(true);                          //false=x true=0
    const [board,setBoard] = useState(Array(numberOfCards).fill(""))

   const [winner,setWinner] = useState(null);

   const play=useCallback( function playCallBack(index){


        console.log("move played",index);
        if(turn==true){
            board[index] = "O"
        }
        else{
            board[index] = "X"
        }
        const win = isWinner(board,turn?"O":"X");
        if(win){
            setWinner(turn?"O":"X");
            toast.success("congratulation win the game!!!")
        }
        setBoard([...board]);
        setTurn(!turn);

    },[turn]
   );
function Reset(){
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
    setTurn(true);
}

 return (
    <div className = "grid-wrap">
        {winner &&(
        <>
            <h1 className = "turn_highlight">Winner is {winner}</h1>
            <button className = "reset" onClick = {Reset}>RESET</button>
            <ToastContainer position  = "top-center" />
        </>)
        
        }
        <h1  className = "turn_highlight">Current Turn:{(turn)?'0':'X'}</h1>
        <div className = "grid">
            {board.map((value,idx)=>{
                return <Card  gameEnd = {winner? true:false } onPlay = {play} player = {value} index = {idx} />
            })}
        </div>
    </div>
 )
}
export default Grid;