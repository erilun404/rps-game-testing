'use client';
import Image from "next/image";
import scissors from "/public/scissors.svg";
import paper from "/public/paper.svg";
import rock from "/public/rock.svg";

type SelectionPanelProps = {
  onSelect: (choice: string) => void;
};

const SelectionPanel = ({ onSelect }: SelectionPanelProps) => {
  return (
    <div className="py-3 flex space-x-4">
      <button className="shadow-xl w-24 bg-[#e7efc5] hover:bg-[#d3e3bd] text-gray-700 font-bold py-2 px-4 border border-slate-300 rounded flex flex-col items-center justify-center space-y-2" onClick={() => onSelect("Rock")}>
        <Image src={rock} alt="rock" width="38"/>  
        <span>Rock</span>
      </button>

      <button className="shadow-xl w-24 bg-[#e7efc5] hover:bg-[#d3e3bd] text-gray-700 font-bold py-2 px-4 border border-slate-300 rounded flex flex-col items-center justify-center space-y-2" onClick={() => onSelect("Paper")}>
      <Image src={paper} alt="paper" width="38"/>  
      <span>Paper</span>
      </button>
      
      <button className="shadow-xl w-24 bg-[#e7efc5] hover:bg-[#d3e3bd] text-gray-700 font-bold py-2 px-4 border border-slate-300 rounded flex flex-col items-center justify-center space-y-2" onClick={() => onSelect("Scissors")}>
      <Image src={scissors} alt="scissors" width="38"/>  
      <span>Scissors</span>
      </button>
    </div>
  );
};
export default SelectionPanel;