'use client'

type resetButtonProps = {
    onReset: () => void
}
const ResetButton = ({onReset}:resetButtonProps) => {
    return (
        <div>
            <button className="bg-[#3B3750] hover:bg-[#413c58] text-white font-bold py-1 px-4 rounded-full w-36 m-auto mt-4 md:px-1 md:m-3" onClick={() => onReset()}>Reset Game</button>
        </div>
    )
}

export default ResetButton