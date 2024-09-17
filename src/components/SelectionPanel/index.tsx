'use client';
type SelectionPanelProps = {
  onSelect: (choice: string) => void;
};

const SelectionPanel = ({ onSelect }: SelectionPanelProps) => {
  return (
    <div className="py-3">
      <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded" onClick={() => onSelect("Rock")}>Rock</button>
      <button className="bg-orange-200 hover:bg-orange-300 text-gray-600 font-bold py-2 px-4 border border-orange-300 rounded" onClick={() => onSelect("Paper")}>Paper</button>
      <button className="bg-slate-300 hover:bg-slate-400 text-gray-600 font-bold py-2 px-4 border border-slate-400 rounded" onClick={() => onSelect("Scissors")}>Scissors</button>
    </div>
  );
};
export default SelectionPanel;