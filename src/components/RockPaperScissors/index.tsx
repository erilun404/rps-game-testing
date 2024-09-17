'use client'
import SelectionPanel from "../SelectionPanel";
import { useState, useEffect } from "react";
import ChooseName from "../ChooseName";
import ResetButton from "../ResetButton";
import ScoreBoard from "../ScoreBoard";
import DisplayResult from "../DisplayResult";

const RockPaperScissors = () => {
    const [choice, setChoice] = useState('')
    const [name, setName] = useState('')
    const [computerChoice,  setComputerChoice] = useState<string>('')
    const [result, setResult] = useState<string>('');
    
    
    const selectedChoice = (choice:string) => {
        setChoice(choice)
        const computerMove = getComputerRandomChoice()  // Get random computer choice
        setComputerChoice(computerMove)  // Update state with computer's choice
        console.log("User's choice:", choice)
        console.log("Computer's choice:", computerMove)
      
    }

    const evaluateResults = (choice:string, computerChoice:string) => {
        if(choice === computerChoice) {
            return "It's a tie!";
        }else if (
            (choice === "Rock" && computerChoice === "Scissors") ||
            (choice === "Scissors" && computerChoice === "Paper") ||
            (choice === "Paper" && computerChoice === "Rock")
        ){
            return "You winnn!";
        }else {
            return "Stupid bot computer wins!";
        }
    }

    useEffect(() => {
        if(choice !== '') {
            setResult(evaluateResults(choice, computerChoice));
        }
    }, [computerChoice])


    const userName = (name:string) => {
        setName(name)
        console.log(name)
    }

    //setComputerChoice(getComputerRandomChoice());
    const getComputerRandomChoice = ():string => {
        const choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * choices.length)]
    }

    const restartGame = () => {
        setChoice('');
        
       
    }

    
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
        <div>
            <DisplayResult
            playerChoice={choice}
            computerChoice={computerChoice}
            result={result} />
        </div>        
        </div>
        <ResetButton onReset={restartGame}/>
        </>
        
    )
}

export default RockPaperScissors