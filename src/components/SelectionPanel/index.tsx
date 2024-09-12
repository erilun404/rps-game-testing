type selectionPanelProps = {
    onSelect: (choice: string) => void;
  }

const SelectionPanel = ({onSelect}:selectionPanelProps) => {
 

    return (
        <div>
            <button onClick={() => onSelect('Rock')}>Rock</button> 
            <button>Paper</button>
            <button>Scissors</button>
        </div>
    )
}

export default SelectionPanel