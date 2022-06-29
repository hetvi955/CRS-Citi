import React from 'react'
import { Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
        "height":"8vh",
        "width": "34vw",
        // backgroundColor: "#87ACD7",
        // border: "#87ACD7"
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
            <Button variant="info" style={btnHeight}><FontAwesomeIcon icon={faArrowLeft} /> Choose Image</Button>{' '}
        </div>
    </div>
  )
}
