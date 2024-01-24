import React, { FC } from 'react'

interface GreetProps{
  name?:string;
}
const Greet:FC<GreetProps> = ({name}):JSX.Element => {
  return (
    <div style={{width:"100%"}}>Hello {name} </div>
  )
}

export default Greet