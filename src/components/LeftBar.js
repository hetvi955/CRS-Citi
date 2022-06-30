import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class LeftBar extends Component {
    stl={
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "height":"92vh",
        "width": "50vw"        
    }
    stl1={
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"        
    }

    // state = { 
    //     selectedFile: null ,
    //     isFileUploaded: false,
    // }
    
    
    // fileChangedHandler = async event => {

    //     this.setState({ selectedFile: event.target.files[0] });
        
    //     await setTimeout(() => {
    //         console.log("I am in set timr out");
    //         this.setState({isFileUploaded: true});
    //         // console.log(this.state.isFileUploaded);
           
    //     }, 2000);

    // }

    // uploadHandler = () => {
    //     console.log(this.state.selectedFile)
    //     console.log(this.state.isFileUploaded);
    // }

    // imageSource = () => {
    //     const objectUrl = URL.createObjectURL(this.state.selectedFile)
    //     return (
    //         <>
    //             <img src={objectUrl} height="200px" />
    //         </>
    //     )

    // }

    btnHeight={
        "height":"6vh"
    }
    btnHeight1={
        marginTop: "2vh",
        "height":"6vh"
    }
    divStyle={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
  render() {
    return (
        <>
        <div style={this.stl}>
            <div style={this.stl1}>
            {
            this.props.state.isFileUploaded ? 
        <div style={this.divStyle}>
            {this.props.imageSource()}
            <br />
            {this.props.state.resultRecievedFromAPI ? "":
            <>
            <Button onClick={()=>{this.props.uploadHandler()}} variant="outline-dark" style={this.btnHeight1}>Upload Image</Button>{' '}
            </>
            }
        </div>
            : 
        <>
            <input type="file"
              style={{display: "none"}}
              onChange={this.props.fileChangedHandler}
              ref={fileInput => this.fileInput = fileInput}
              ></input>
            <Button onClick={()=>{this.fileInput.click()}} variant="outline-dark" style={this.btnHeight}>Choose Image</Button>{' '}
        </>
        
        }
            </div>
        </div>
        </>
    )
  }
}
