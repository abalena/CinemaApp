import React from 'react';

import "../style/style.css";

export default class UploadFile extends React.Component{
  constructor(props) {
      super(props)
      this.uploadFile = this.uploadFile.bind(this);
    }

    uploadFile(event) {
        let file = event.target.files[0];
        console.log(file);

        if (file) {
          let data = new FormData();
          data.append('file', file);
        }
    }
    render() {
        return (
            <div className="UploadFile">
              <input type='file' name='file' onChange={this.uploadFile}/> 
            </div>
        );
    }
}
