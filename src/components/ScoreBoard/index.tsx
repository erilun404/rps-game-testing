type ScoreBoardProps = {
    computerScore: number,
    playerScore: number,
    userName: string
};

const ScoreBoard = ({computerScore, playerScore, userName}: ScoreBoardProps) => {
    return (
        <div className="flex justify-center flex-col items-center">
            <p data-testid="player-score">{userName}: {playerScore}</p>
            <p data-testid="computer-score">Computer: {computerScore}</p>
        </div>
    )
}
export default ScoreBoard