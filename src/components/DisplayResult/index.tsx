type DisplayResultProps = {
    playerChoice: string | null;
    computerChoice: string | null;
    result: string | null;
};

const DisplayResult = ({playerChoice, computerChoice, result}: DisplayResultProps) => {
    return ( 
        <>
            <div className="flex flex-col mt-6 items-center"> 
                {playerChoice && <p data-testid="player-choice">You chose {playerChoice}</p>} {/* Vet inte vilken tag det ska vara p, h2? */}
                {computerChoice && <p data-testid="computer-choice">Computer chose {computerChoice}</p>}
            </div>
            <div className="text-center">
                <p className="py-6 font-bold text-lg" data-testid="who-won">
                {result || "Choose Rock, Paper or Scissors!"}
                </p> 
            </div>
        </>
    )
}

export default DisplayResult