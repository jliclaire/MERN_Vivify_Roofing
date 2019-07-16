import React from "react";
import './topButtons.css'

const TopButtons = (props) => {
  
  return (
    <div className="job-top-buttons">
      <div className="button">
        <p className='button-text'>Assign Lead</p>
      </div>
      <div className="button">
        <p className='button-text'>Move Lead</p>
      </div>
      <div className="button">
        <p className='button-text'>Edit Lead</p>
      </div>
    </div>
  )
}

export default TopButtons;
