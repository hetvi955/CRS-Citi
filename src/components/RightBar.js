import React from 'react'
import { Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RightBar() {
    let stlBg={
        backgroundColor:"#45809A",
        width: "50vw",
        height: "92vh"
    };
    let stlText1={
        fontSize: "72px",
        color: "white",
        marginTop: "8vh",
        marginLeft: "10vw"
    };
    let stlText2={
        fontSize: "20px",
        color: "white",
        marginTop: "1vh",
        marginLeft: "10vw"
    };
    let stlBtn={
        color: "white",
        marginTop: "1vh",
        marginLeft: "10vw"
    };
    
    let btnHeight={
        "height":"6vh"
    }

  return (
    <div style={stlBg}>
        <div style={stlText1}>
            Cheque <br/>
            Recoganation <br/>
            System
        </div>
        <div style={stlText2}>
            We will help you detect the check instantly
        </div>
        <div style={stlBtn}>
            <Button variant="primary" style={btnHeight}><FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Choose Image</Button>{' '}
        </div>
    </div>
  )
}
