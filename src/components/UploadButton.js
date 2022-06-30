import React, { Component } from 'react'

export default class uploadButton extends Component {
    state = { 
        selectedFile: null ,
        isFileUploaded: false,
    }
    
    
    fileChangedHandler = async event => {

        this.setState({ selectedFile: event.target.files[0] });
        
        await setTimeout(() => {
            console.log("I am in set timr out");
            this.setState({isFileUploaded: true});
            // console.log(this.state.isFileUploaded);
           
        }, 2000);

    }

    uploadHandler = () => {
        console.log(this.state.selectedFile)
        console.log(this.state.isFileUploaded);
    }

    imageSource = () => {
        const objectUrl = URL.createObjectURL(this.state.selectedFile)
        return (
            <>
                <img src={objectUrl} height="200px" />
            </>
        )

    }

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
      
      </>
        
    )
  }
}



