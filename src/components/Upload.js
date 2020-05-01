import React, { Component } from "react";
import storage from "../Firebase/index";
import axios from "axios";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      caption: "",
      type: "",
      progress: 0,
    };
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log("NOTICE ME");
  };

  handleUpload = (event) => {
    event.preventDefault();
    console.log("handle upload button called");

    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("Taking snapshot...");
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        console.log("Saving to storage...");
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url: url });
            //make api call here to post information back to the server
            //pseudo code
            console.log("Posting to server...");
            let type = "";
            let media = this.state.url.split(".");
            //last element in the array  media[-1]

            //split on (.) i.e myImage.jpg
            //switch on the media[-1]
            switch (media[-1]) {
              case "jpg" || "png" || "jpeg" || "gif":
                type = "image";
                break;
              case "mp4" || "mp5" || "flv" || "mpeg":
                type = "video";
                break;
            }
            console.log(type);
            console.log(this.state.url);
            // console.log(this.state.caption);

            axios
              .post("/upload", {
                method: "POST",
                data: {
                  videoUrl: this.state.url,
                  contentType: type,
                  caption: this.state.caption,
                },
              })
              .then((response) => {
                console.log(response);
                console.log("information submitted to database");
              });
          });
      }
    );
  };
  render() {
    return (
      <div className="center">
        <br />
        <h2 className="green-text">React Firebase Image Uploader</h2>
        <br />
        <br />
        <div className="row">
          <progress
            value={this.state.progress}
            max="100"
            className="progress"
          />
        </div>
        <br />
        <br />
        <br />
        <div className="file-field input-field">
          <span>File</span>
          <form onSubmit={this.handleUpload}>
            <input type="file" onChange={this.handleChange} />

            <input className="file-path validate" type="text" />
            <button type="submit">YEET</button>
          </form>
        </div>
        <button>BLOOD FOR THE BLOOD GOD</button>

        <br />
        <br />
        <h1>Your Selected Image</h1>
        <img
          src={this.state.url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
      </div>
    );
  }
}

export default ImageUpload;
