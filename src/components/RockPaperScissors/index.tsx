'use client'
import SelectionPanel from "../SelectionPanel";
import { useState, useEffect } from "react";
import ChooseName from "../ChooseName";
import ResetButton from "../ResetButton";
import ScoreBoard from "../ScoreBoard";
import DisplayResult from "../DisplayResult";

const RockPaperScissors = () => {
    const [choice, setChoice] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [computerChoice,  setComputerChoice] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [playerScore, setPlayerScore] = useState<number>(0);
    const [computerScore, setComputerScore] = useState<number>(0);
    
    const selectedChoice = (choice:string) => {
        setChoice(choice)
        const computerMove = getComputerRandomChoice()
        setComputerChoice('');
        setTimeout(() => setComputerChoice(computerMove), 0);   
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
        if(choice !== '' && computerChoice !== '') {
            setResult(evaluateResults(choice, computerChoice));
        }
    }, [computerChoice])

    const userName = (name:string) => {
        setName(name)
    }

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
                <div className="flex justify-center flex-col items-center border-2 border-slate-200 py-20">
                    <div className="pb-7">
                        <h1 className="text-2xl">Welcome, {name}!</h1> 
                    </div>
                    <div className="flex">
                        <SelectionPanel onSelect={selectedChoice} 
                        />
                    </div>
                    <div>
                        <DisplayResult
                        playerChoice={choice}
                        computerChoice={computerChoice}
                        result={result} 
                        />
                    </div>   
                    <div>
                        <ScoreBoard
                        playerScore={playerScore}
                        computerScore={computerScore}
                        userName={name}
                        />
                    </div>     
                    <div>
                        <ResetButton 
                        onReset={restartGame}/>
                    </div>
                </div>
            )}
        </>
    );
}

export default RockPaperScissors