'use client'
import SelectionPanel from "../SelectionPanel";
import { useState } from "react";
import ChooseName from "../ChooseName";
import ResetButton from "../ResetButton";
import ScoreBoard from "../ScoreBoard";
import DisplayResult from "../DisplayResult";

const RockPaperScissors = () => {
    const [choice, setChoice] = useState('')
    const [name, setName] = useState('')
    const [computerChoice,  setComputerChoice] = useState<string>('')
    const [result, setResult] = useState<string>('');
    
    
    const restartGame = () => {
        setChoice('')
       
    }

    const selectedChoice = (choice:string) => {
        setChoice(choice)
        const computerMove = getComputerRandomChoice()  // Get random computer choice
        setComputerChoice(computerMove)  // Update state with computer's choice
        console.log("User's choice:", choice)
        console.log("Computer's choice:", computerMove)
      
    }

    const evaluateResults = (choice:string, computerChoice:string) => {
        if(choice === computerChoice) {
            return 0;
        }else if (
            (choice === "Rock" && computerChoice === "Scissors") ||
            (choice === "Scissors" && computerChoice === "Paper") ||
            (choice === "Paper" && computerChoice === "Rock")
        ){
            return 1;
        }else {
            return -1;
        }
    }

    const userName = (name:string) => {
        setName(name)
        console.log(name)
    }

    const getComputerRandomChoice = ():string => {
        const choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * choices.length)]
    }

    //setComputerChoice(getComputerRandomChoice());
    
    return (
        <>
        <ChooseName updateName={userName} />
        <div>
             <h1>Welcome, {name}!</h1> 
        </div>
        <SelectionPanel onSelect={selectedChoice} />
        <div>
            <p>Choose Rock, Paper or Scissors!</p> {/*flytta till displayResult*/}
        </div>
        <div>
        <>
            
            {(choice && computerChoice) && <>
            <p>You chose {choice}</p>
            <p>Computer {computerChoice}</p>
            </>}
         
            </>
            
        
        </div>
        <ResetButton onReset={restartGame}/>
        </>
        
    )
}

export default RockPaperScissors