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

        console.log(image);
        console.log(image.name);
        // cannot console log in a function chain like that below
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url: url });
            //make api call here to post information back to the server
            //pseudo code
            console.log("Posting to server...");
            console.log(this.state.url);
            let type = "";
            // let media = this.state.url.split(".");
            let firebaseURL = this.state.url;
            let splitURL = firebaseURL.split("?");

            // https://firebasestorage.googleapis.com/v0/b/cringex-46ee6.appspot.com/o/images%2Fa2.jpg
            //?
            //alt=media&token=080a925d-bb17-41ac-b1c5-1c083c90ecc6

            // splitURL = ["https://firebasestorage.googleapis.com/v0/b/cringex-46ee6.appspot.com/o/images%2Fa2.jpg", "alt=media&token=080a925d-bb17-41ac-b1c5-1c083c90ecc6"]

            let splitPeriod = splitURL[0];

            let media = splitPeriod.split(".");
            console.log("Testing split URL");
            console.log(splitPeriod);
            console.log(media);
            console.log(media[media.length - 1]);
            //last element in the array  media[-1]

            //split on (.) i.e myImage.jpg
            //switch on the media[-1]
            switch (media[media.length - 1]) {
              case "jpg" || "png" || "jpeg" || "gif":
                type = "image";
                break;
              case "mp4" || "mp5" || "flv" || "mpeg":
                type = "video";
                break;
              default:
                console.log("UNSUPPORTED FILE TYPE");
                break;
            }
            console.log(type);
            console.log(this.state.url);
            // console.log(this.state.caption);

            let apiPayload = {
              videoUrl: this.state.url,
              postType: type,
              caption: this.state.caption,
            };

            axios.post("/upload", apiPayload).then((response) => {
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
