import {render, screen} from '@testing-library/react'
import Header from '.'

describe("Header rendered correctly", () => {
    test("Render the title", () => {
        render(<Header />)

        const headerText = screen.getByText("Rock Papahhhh Scizzors Game") //should be a heading with level 1? Question by Erika and Maria
        expect(headerText).toBeInTheDocument()
    })
})