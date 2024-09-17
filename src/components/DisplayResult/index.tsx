type DisplayResultProps = {
    playerChoice: string | null;
    computerChoice: string | null;
    result: string | null;
};

const DisplayResult = ({playerChoice, computerChoice, result}: DisplayResultProps) => {
    return ( 
        <div className="flex justify-center"> 
            {playerChoice && <p data-testid="player-choice">You chose {playerChoice}</p>} {/* Vet inte vilken tag det ska vara p, h2? */}
            {computerChoice && <p data-testid="computer-choice">Computer chose {computerChoice}</p>}
            <p className="mb-6" data-testid="who-won">
                {result || "Choose Rock, Paper or Scissors!"}
            </p> 
        </div>
    )
}

export default DisplayResult