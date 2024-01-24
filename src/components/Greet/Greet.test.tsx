import { render,screen } from "@testing-library/react";
import Greet from ".";


describe("Greet",()=>{
    test("Greet render correctly ",()=>{
        render(<Greet/>)
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    });
    test("Greet renders with a name",()=>{
        render(<Greet name="Santra"/>)
        const textElement = screen.getByText("Hello Santra");
        expect(textElement).toBeInTheDocument();
    })
})