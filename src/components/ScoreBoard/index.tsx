type ScoreBoardProps = {
    computerScore: number,
    playerScore: number,
    userName: string
};

const ScoreBoard = ({computerScore, playerScore, userName}: ScoreBoardProps) => {
    return (
        <div className="flex justify-center flex-col items-center">
            <p data-testid="player-score">{userName}: <span className="font-bold">{playerScore}</span></p>
            <p data-testid="computer-score">Computer: <span className="font-bold">{computerScore}</span></p>
        </div>
    )
}
export default ScoreBoard