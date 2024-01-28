import { render,screen } from "@testing-library/react";
import Application from ".";

describe("Application",()=>{
    test("renders correctly",()=>{
        render(<Application/>);
        const heading1Element = screen.getByRole("heading",{level:1})
        expect(heading1Element).toBeInTheDocument();
        const heading3Element = screen.getByRole("heading",{level:3})
        expect(heading3Element).toBeInTheDocument();
        const nameElement = screen.getByRole("textbox",{name:"name"});
        expect(nameElement).toBeInTheDocument();
        const addressElement = screen.getByRole("textbox",{name:"address"});
        expect(addressElement).toBeInTheDocument();
        const nameElement2 = screen.getByLabelText("name");
        expect(nameElement2).toBeInTheDocument();
        const techElement = screen.getByRole("combobox");
        expect(techElement).toBeInTheDocument();
        const submitButton = screen.getByRole("button");
        expect(submitButton).toBeInTheDocument();
        const qualiElement = screen.getByRole("radio");
        expect(qualiElement).toBeInTheDocument();
        const favFoodElement = screen.getByRole("checkbox");
        expect(favFoodElement).toBeInTheDocument();
        const addressElement2 = screen.getByLabelText("address");
        expect(addressElement2).toBeInTheDocument();
        const nameElement4 = screen.getByDisplayValue("Manoj");
        expect(nameElement4).toBeInTheDocument();
        
        
    })

});