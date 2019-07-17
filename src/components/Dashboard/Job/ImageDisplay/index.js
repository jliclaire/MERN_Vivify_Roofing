import React from "react";
import "./imageDisplay.css";

class ImageDisplay extends React.Component {
  render() {
    const { data } = this.props;
    const links = data.imageUrls;
    const link = links.map(x => (
      <img className="photo-frame" src={x} alt="Logo" width="90" height="110" />
    ));
    return (
      <>
        <div className="photos-wrapper">{link}</div>
      </>
    );
  }
}

export default ImageDisplay;
