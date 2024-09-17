'use client';
type SelectionPanelProps = {
  onSelect: (choice: string) => void;
};

const SelectionPanel = ({ onSelect }: SelectionPanelProps) => {
  return (
    <div>
      <button onClick={() => onSelect("Rock")}>Rock</button>
      <button onClick={() => onSelect("Paper")}>Paper</button>
      <button onClick={() => onSelect("Scissors")}>Scissors</button>
    </div>
  );
};
export default SelectionPanel;