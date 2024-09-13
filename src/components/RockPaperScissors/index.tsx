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
        <SelectionPanel onSelect={selectedChoice} />
        
        </>
        
    )
}

export default RockPaperScissors