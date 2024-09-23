'use client'
import { useState,  HTMLInputTypeAttribute, SetStateAction} from "react";

type ChooseNameProps = {
    updateName:(name:string) => void
}
const ChooseName = ({updateName}:ChooseNameProps) => {
    const [userInput, setUserInput] = useState<HTMLInputTypeAttribute>('');

    const handleChange= (e: { target: { value: SetStateAction<HTMLInputTypeAttribute>; }; }) => {
        setUserInput(e.target.value)
    }

    return (
        <div className="flex justify-center py-24 border-2 border-slate-200 flex-col md:flex-row">
            <label className="pr-2 text-center pb-1 md:flex md:pb-0 md:items-center" htmlFor="name" >Enter your name</label>
            <input className="italic text-center w-52 m-auto md:m-0 rounded-md md:rounded-xl" id="name" placeholder ="Enter your name here" onChange={handleChange}value={userInput}></input>
            <button className="bg-[#3B3750] hover:bg-[#413c58] text-white font-bold py-1 px-4 rounded-full w-36 m-auto mt-4 md:px-1 md:m-3" onClick={() => updateName(userInput)}>Add name</button>
        </div>
    )
}
export default ChooseName