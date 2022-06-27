import React from 'react'
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";


export default function FullBar() {
    let mainstl1={
        display: "flex",
    };
  return (
    <>
    <div style={mainstl1}>
        
        <LeftBar/>
        <RightBar/>


    </div>
    </>
  )
}
