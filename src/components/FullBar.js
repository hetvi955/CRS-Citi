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
    resultRecievedFromAPI: false,
}

  
fileChangedHandler = async event => {

  this.setState({ selectedFile: event.target.files[0] });
  
  setTimeout(() => {
      console.log("I am in set timr out");
      this.setState({isFileUploaded: true});
     
  }, 1000);

}

uploadHandler = () => {
  console.log(this.state.selectedFile)
  console.log(this.state.isFileUploaded);
  this.setState({resultRecievedFromAPI: true});
}

imageSource = () => {
  const objectUrl = URL.createObjectURL(this.state.selectedFile)
  return (
      <>
          <img src={objectUrl} height="200px" />
      </>
  )

}

clearAndRestart = () => {
  this.setState({resultRecievedFromAPI: false}); 
  this.setState({isFileUploaded: false});
  this.setState({selectedFile: null});
}
  render() {
    return (
      <>
    <div style={this.mainstl1}>
        <LeftBar imageSource={this.imageSource.bind(this)} uploadHandler={this.uploadHandler.bind(this)} fileChangedHandler={this.fileChangedHandler.bind(this)} state={this.state}/>
        <RightBar state={this.state} clearAndRestart={this.clearAndRestart.bind(this)}/>
    </div>
    </>
    )
  }
}
