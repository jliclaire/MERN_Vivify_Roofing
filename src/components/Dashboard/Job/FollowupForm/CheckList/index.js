import React from "react";
import "./CheckList.css";

class CheckList extends React.Component {
 constructor() {
    super();
    this.state = {
      jobType: '',
      value: 0

    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      jobType: event.target.value,
      value: event.target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log(`You chose ${this.state.jobType} roof.`);
  }


  render() {  
return (  
    <div className='popup'>  
      <div className='popupinner'>  
        <form onSubmit={this.handleSubmit}>
        <h1 className="checkbox-title">Checklist</h1>
        <div className="checkbox-jobtype">
          <label>
              <input
                type="radio"
                value="small"
                checked={this.state.jobType === "metal"}
                onChange={this.handleChange}
              />
              Metal
            </label>
            <label>
              <input
                type="radio"
                value="medium"
                checked={this.state.jobType === "tile"}
                onChange={this.handleChange}
              />
              Tile
            </label>
        </div>
        <div className="checkbox-list">
            <label>
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              Check the pitch/fall
            </label>
            <label>
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              Skylights
            </label>
            <label>
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              Sizing of the gutters
            </label>
            <label>
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              Need carpentry
            </label>
          </div>
          <div className="quote-wrapper">
            <div className="quote-inner-wrapper">
            <div className="dollar-box">             
                <label className="dollar-sign">$</label>
              </div>
              <input className="quote-input"
                  type="number"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
            </div>
            <button className="checklist-next-btn" onClick={this.props.closePopup}>NEXT</button> 
          </div>
        </form>
      </div>  
    </div>  
    );  
  }  
}  

export default CheckList;
