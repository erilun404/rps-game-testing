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
    const [playerScore, setPlayerScore] = useState<number>(0);
    const [computerScore, setComputerScore] = useState<number>(0);
    
    const selectedChoice = (choice:string) => {
        setChoice(choice)
        const computerMove = getComputerRandomChoice()  // Get random computer choice
        setComputerChoice(computerMove)  // Update state with computer's choice     
    }

    const evaluateResults = (choice:string, computerChoice:string) => {
        if(choice === computerChoice) {
            return "It's a tie!";
        }else if (
            (choice === "Rock" && computerChoice === "Scissors") ||
            (choice === "Scissors" && computerChoice === "Paper") ||
            (choice === "Paper" && computerChoice === "Rock")
        ){
            setPlayerScore((prev) => prev + 1)
            return "You winnn!";
        }else {
            setComputerScore((prev) => prev + 1)
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
    }

    //setComputerChoice(getComputerRandomChoice());
    const getComputerRandomChoice = ():string => {
        const choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * choices.length)]
    }

    const restartGame = () => {
        setChoice('');
        setComputerChoice('');
        setResult('');
        setPlayerScore(0);
        setComputerScore(0);
               
    }

    
    return (
        <>
            {!name ? (
            <ChooseName updateName={userName} />
            ) : (
                <>
                    <div>
                        <h1>Welcome, {name}!</h1> 
                    </div>
                    <SelectionPanel onSelect={selectedChoice} />
                    <div>
                    <div>
                        <DisplayResult
                        playerChoice={choice}
                        computerChoice={computerChoice}
                        result={result} />
                    </div>   
                    <div>
                        <ScoreBoard
                        playerScore={playerScore}
                        computerScore={computerScore}
                        userName={name}
                        />
                    </div>     
                    </div>
                    <div>
                    <ResetButton onReset={restartGame}/>
                    </div>
                </>
            )}
        </>
    );
}

export default RockPaperScissors