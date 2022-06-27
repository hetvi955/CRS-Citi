import React from 'react'
import { Button } from 'react-bootstrap'


export default function LeftBar() {
    let stl={
        "display": "flex",
        "align-item": "center",
        "justify-content": "center",
        "height":"92vh",
        "width": "50vw"        
    }
    let stl1={
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"        
    }
    let btnHeight={
        "height":"6vh"
    }
  return (
    <>
    <div style={stl}>
        <div style={stl1}>
            <Button variant="outline-primary" style={btnHeight}>Choose Image</Button>{' '}
        </div>
    </div>
    </>
  )
}
