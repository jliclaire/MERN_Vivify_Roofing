import React from 'react';
// import '../components/ImageUpload.css'
import axios from 'axios';


class ImageUpload extends React.Component {
  state = {image: null}

  handleUpload = (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    let config = { 
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    console.log(this.props.id)
    axios.post(`${process.env.REACT_APP_API_URL}/jobs/${this.props.id}/image`, formData, config)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  
  render() {
    return (
      <>
        <p>Upload a photo:</p>
        <input type="file" name="image-upload" id="image-upload" onChange={this.handleUpload}/>
      </>
    )
  }
}

export default ImageUpload