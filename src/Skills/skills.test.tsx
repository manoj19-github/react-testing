import { render,screen } from "@testing-library/react"
import Skills from "."

describe("skills",()=>{
    const skillset:string[]=["React","NextJS","NodeJs","ExpressJS","NestJS","ReactNative","MongoDB"]
    test("renders correctly",()=>{
        render(<Skills skills={skillset}/>);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })
    test("renders list item correctly",()=>{
        render(<Skills skills={skillset}/>);
        const listItemElement = screen.getAllByRole("listitem");
        expect(listItemElement).toHaveLength(skillset.length);
    })
    test("login button rendered",()=>{
        render(<Skills skills={skillset}/>);
        const loginButton = screen.getByRole("button",{name:"Login"})
        expect(loginButton).toBeInTheDocument()
    })
    test("learning button rendered",()=>{
        render(<Skills skills={skillset}/>);
        const startLearningButton = screen.queryByRole("button",{name:"Start Learning"})
        expect(startLearningButton).not.toBeInTheDocument()
    })
    test("learning button rendered after 2000 ms",async()=>{
        render(<Skills skills={skillset}/>);
        const startLearningButton = await screen.findByRole("button",{name:"Start Learning"},{timeout:3000})
        expect(startLearningButton).toBeInTheDocument()
    })
})