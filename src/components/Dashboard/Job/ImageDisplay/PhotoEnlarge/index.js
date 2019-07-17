import React from 'react';

class PhotoEnlarge extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div className="popup">
        <img className="photo-frame" src={data} />
        <button className="checklist-next-btn close-btn" onClick={this.props.close}>X</button>
      </div>
    )
  }
}

export default PhotoEnlarge 