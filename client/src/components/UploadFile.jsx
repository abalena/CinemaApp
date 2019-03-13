import React from 'react';

import "../style/style.css";

export default class UploadFile extends React.Component{
  constructor(props) {
      super(props)
      this.uploadFile = this.uploadFile.bind(this);
      this.data = new FormData();
  }

  uploadFile(event) {
      let file = event.target.files[0];
      if(file){
        console.log(file);
        this.data.append('file', file)
      }
    }

    handleFileUpload = () =>{
      this.props.onFileUpload(this.data);
    }
    render() {
      return (
        <div className="UploadFile">
          <input type='file' accept=".txt" name='file' onChange={this.uploadFile}/>
          <button onClick = {this.handleFileUpload}>Upload</button>
        </div>
      );
    }
}
