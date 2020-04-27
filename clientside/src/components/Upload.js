import React from "react";
import axios, { post } from "axios";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then((response) => {
      console.log(response.data);
    });
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  fileUpload(file) {
    const url =
      "https://drive.google.com/drive/folders/1OWubpleT0nhYJ4my9LKvhdc2Ayk54oMh";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  }

  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <div>
          <h1>File Upload</h1>

          <form onSubmit={this.onFormSubmit}>
            <input type="file" onChange={this.onChange} />
            <button type="submit">Upload</button>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
}

export default Upload;
