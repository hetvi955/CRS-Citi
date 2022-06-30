import React from 'react'
import { Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function RightBar(props) {
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
    let stlText3={
        fontSize: "20px",
        color: "white",
        marginTop: "46vh",
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

    let stlDetail={
        color: "white",
        fontSize: "16",
        marginTop: "20vh",
        marginLeft: "10vw",
        }
    
    let stlDetailChild={
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "2vh"
    }
    let stlHeadName={
        minWidth: "15vw"
    }
  return (
    <div style={stlBg}>

    {props.state.isFileUploaded ?  
    <>
    {
        props.state.resultRecievedFromAPI ? 
        <>
                <div style={stlDetail}>
            <div style={stlDetailChild}>
                <div style={stlHeadName}>
                    Bank Name
                </div>
                <div>
                    Axis Bank
                </div>
            </div>
            <div style={stlDetailChild}>
                <div style={stlHeadName}>
                    Name
                </div>
                <div>
                    Chelsa Watson
                </div>
            </div>
            <div style={stlDetailChild}>
                <div style={stlHeadName}>
                    Amount
                </div>
                <div>
                    6542
                </div>
            </div>
            <div style={stlDetailChild}>
                <div style={stlHeadName}>
                    Amount(words)
                </div>
                <div>
                    Six thousand five hundread and fourty two
                </div>
            </div>
            <div style={stlDetailChild}>
                <div style={stlHeadName}>
                    Date
                </div>
                <div>
                    06 - 05 - 22
                </div>
            </div>

            <Button variant="info" style={btnHeight} onClick={props.clearAndRestart}>Clear Image and try again</Button>{' '}
        </div>
        </>
        :
        <div style={stlText3}>
                Upload the file to see the results
        </div>
    }
    </>
:
    <>
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
    </>
    }
    </div>
  )
}
