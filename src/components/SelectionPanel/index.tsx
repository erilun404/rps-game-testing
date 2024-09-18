'use client';
type SelectionPanelProps = {
  onSelect: (choice: string) => void;
};

const SelectionPanel = ({ onSelect }: SelectionPanelProps) => {
  return (
    <div className="py-3 flex space-x-4">
      <button className="bg-[#e7efc5] hover:bg-[#d3e3bd] text-gray-700 font-bold py-2 px-4 border border-slate-300 rounded" onClick={() => onSelect("Rock")}>Rock</button>
      <button className="bg-[#e7efc5] hover:bg-[#d3e3bd] text-gray-700 font-bold py-2 px-4 border border-slate-300 rounded" onClick={() => onSelect("Paper")}>Paper</button>
      <button className="bg-[#e7efc5] hover:bg-[#d3e3bd] text-gray-700 font-bold py-2 px-4 border border-slate-300 rounded" onClick={() => onSelect("Scissors")}>Scissors</button>
    </div>
  );
};
export default SelectionPanel;