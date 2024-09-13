'use client'
import SelectionPanel from "../SelectionPanel"
import { useState } from "react"
import ChooseName from "../ChooseName"

const RockPaperScissors = () => {
    const [choice, setChoice] = useState('')
    const [name, setName] = useState('')
    
    const selectedChoice = (choice:string) => {
        setChoice(choice)
        console.log(choice)
    }
    const userName = (name:string) => {
        setName(name)
        console.log(name)
    }
    return (
        <>
        <ChooseName updateName={userName} />
        <div>
             <h1>Welcome, {name}!</h1> 
        </div>
        <SelectionPanel onSelect={selectedChoice} />
        <div>
            <p>Choose Rock, Paper or Scissors!</p> //flytta till displayResult
        </div>
        <div>
            <p>You chose {choice}</p>
        </div>
        </>
        
    )
}

export default RockPaperScissors