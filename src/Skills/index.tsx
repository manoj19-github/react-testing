import React, { FC, useEffect, useState } from 'react'

interface SkillsProps{
    skills:string[]
}
const Skills:FC<SkillsProps> = ({skills}):JSX.Element => {
    const [isLoggedIn,setIsLoggedIn] = useState<boolean>(false);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoggedIn(true)

        },2000)

    },[])
  return (
    <div>
        <h1>my skills</h1>
        <ul>
            {
                skills.map((self,index)=>(
                    <li key={index}>{self}</li>
                ))
            }

        </ul>
        {
            isLoggedIn ? (
                <button>Start Learning</button>
            ):(<></>)

        }
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>

    </div>
  ) 
}

export default Skills