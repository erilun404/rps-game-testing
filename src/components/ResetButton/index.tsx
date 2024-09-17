'use client'

type resetButtonProps = {
    onReset: () => void
}
const ResetButton = ({onReset}:resetButtonProps) => {
    return (
        <div>
            <button onClick={() => onReset()}>Reset Game</button>
        </div>
    )
}

export default ResetButton