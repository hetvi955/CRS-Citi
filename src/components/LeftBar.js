import React from 'react'
import UploadButton from './UploadButton';

export default function LeftBar() {
    let stl={
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "height":"92vh",
        "width": "50vw"        
    }
    let stl1={
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"        
    }
  return (
    <>
    <div style={stl}>
        <div style={stl1}>
            <UploadButton/>
        </div>
    </div>
    </>
  )
}
