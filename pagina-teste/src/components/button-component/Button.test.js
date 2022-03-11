import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import Button from "./Button"

describe("Button Component", () => {
    test("elemento button existe", () => {
        render(<Button />)

        const button = screen.getByRole("button")

        expect(button).toBeInTheDocument()
    })
    test("contem a classe button-component e primary-button, não contem disabled-button", () => {
        render(<Button />)

        const button = screen.getByRole("button")

        expect(button).toHaveClass("button-component")
        expect(button).toHaveClass("primary-button")
        expect(button).not.toHaveClass("disabled-button")
    })
    test("contem a classe secondary-button", () => {
        render(<Button color="secondary" />)

        const button = screen.getByRole("button")

        expect(button).toHaveClass("secondary-button")
    })
    test("contem a classe disabled-button", () => {
        render(<Button disabled />)

        const button = screen.getByRole("button")

        expect(button).toHaveClass("disabled-button")
    })
    test("contem a classe icon-button", () => {
        render(<Button icon="arrow-right" />)

        const button = screen.getByRole("button")

        expect(button).toHaveClass("icon-button")
    })
    test("não contem a classe icon-button", () => {
        render(<Button icon="" />)

        const button = screen.getByRole("button")

        expect(button).not.toHaveClass("icon-button")
    })
    test("deve rodar a função com clique", () => {
        const HandleClick = jest.fn()
        render(<Button onClick={HandleClick} />)

        const button = screen.getByRole("button")

        userEvent.click(button)

        expect(HandleClick).toHaveBeenCalledTimes(1)
    })
    test("não deve rodar a função com clique", () => {
        const HandleClick = jest.fn()
        render(<Button onClick={HandleClick} disabled />)

        const button = screen.getByRole("button")

        userEvent.click(button)

        expect(HandleClick).toHaveBeenCalledTimes(0)
    })
})