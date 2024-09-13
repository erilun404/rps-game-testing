'use client'
import SelectionPanel from "../SelectionPanel"
import { useState } from "react"

const RockPaperScissors = () => {
    const [choice, setChoice] = useState('')
    
    const selectedChoice = (choice:string) => {
        setChoice(choice)
        console.log(choice)
    }
    return (
        <>
        <SelectionPanel onSelect={selectedChoice} />
        </>
        
    )
}

export default RockPaperScissors