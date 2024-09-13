'use client'
import { useState,  HTMLInputTypeAttribute, SetStateAction} from "react"

type ChooseNameProps = {
    updateName:(name:string) => void
}
const ChooseName = ({updateName}:ChooseNameProps) => {
    const [userInput, setUserInput] = useState<HTMLInputTypeAttribute>('')

    const handleChange= (e: { target: { value: SetStateAction<HTMLInputTypeAttribute>; }; }) => {
        setUserInput(e.target.value)
    }

    return (
        <div>
            <label htmlFor="name" >Enter your name</label>
            <input id="name" placeholder="Enter your name here" onChange={handleChange}value={userInput}></input>
            <button onClick={() => updateName(userInput)}>Add name</button>
        </div>
    )
}
export default ChooseName