import React, { Component } from 'react'
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";


export default class FullBar extends Component {
  mainstl1={
    display: "flex",
  };

  state = { 
    selectedFile: null ,
    isFileUploaded: false,
}



  render() {
    return (
      <>
    <div style={this.mainstl1}>
        
        <LeftBar/>
        <RightBar/>


    </div>
    </>
    )
  }
}
