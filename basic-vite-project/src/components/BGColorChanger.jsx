import React, { useState } from 'react'

function BGColorChanger() {
    
    const [color, setColor] = useState("olive");

    return (

    <div className="w-full h-screen duration-150" style={{backgroundColor: color}}>
        
    </div>
  )
}

export default BGColorChanger;
