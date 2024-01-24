import { render,screen } from "@testing-library/react";
import Application from ".";

describe("Application",()=>{
    test("renders correctly",()=>{
        render(<Application/>);
        const nameElement = screen.getByRole("textbox");
        expect(nameElement).toBeInTheDocument();
        const techElement = screen.getByRole("combobox");
        expect(techElement).toBeInTheDocument();
        const submitButton = screen.getByRole("button");
        expect(submitButton).toBeInTheDocument();
        const qualiElement = screen.getByRole("radio");
        expect(qualiElement).toBeInTheDocument();
        const favFoodElement = screen.getByRole("checkbox");
        expect(favFoodElement).toBeInTheDocument();
        
    })

});