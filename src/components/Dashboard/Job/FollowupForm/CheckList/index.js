import React, {Component} from "react";
import "./CheckList.css";

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // jobType: "",
      quoteAmount: 0
    };
  }

  // handleChange = event => {
  //   this.setState({
  //     jobType: event.target.value,
  //     value: event.target.value
  //   });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(`You chose ${this.state.jobType} roof.`);
  // };

  handleQuoteAmountChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.id]: e.target.value });
  };

  handleButtonClick = e => {
    e.preventDefault();
    const quoteAmount = this.state.quoteAmount;
    this.props.newQuoteAmount(quoteAmount);
    this.props.closePopup();
  };

  render() {
    return (
      <div className="popup">
        <div className="popupinner">
          {/* <form onSubmit={this.handleSubmit}> */}
          <form>
            <h1 className="checkbox-title">Checklist</h1>
            <div className="checkbox-jobtype">
              <input
                type="radio"
                name="jobType"
                value="metal"
                // checked={this.state.jobType === "metal"}
                // onChange={this.handleChange}
              />
              Metal
              <input
                type="radio"
                name="jobType"
                value="tile"
                // checked={this.state.jobType === "tile"}
                // onChange={this.handleChange}
              />
              Tile
            </div>
            <div className="checkbox-list">
              <input
                type="checkbox"
                name="checklist"
                value="check pitch or fall"
                className="hidden"
                readOnly=""
                tabIndex="0"
              />
              Check the pitch/fall
              <input
                type="checkbox"
                name="checklist"
                value="check skylights"
                className="hidden"
                readOnly=""
                tabIndex="0"
              />
              Skylights
              <input
                type="checkbox"
                name="checklist"
                value="check gutter size"
                className="hidden"
                readOnly=""
                tabIndex="0"
              />
              Sizing of the gutters
              <input
                type="checkbox"
                name="checklist"
                value="check carpentry"
                className="hidden"
                readOnly=""
                tabIndex="0"
              />
              Need carpentry
            </div>
            <div className="quote-wrapper">
              <div className="quote-inner-wrapper">
                <div className="dollar-box">
                  <label className="dollar-sign">$</label>
                </div>
                <input
                  className="quote-input"
                  type="text"
                  id="quoteAmount"
                  onChange={this.handleQuoteAmountChange}
                />
              </div>
              <button
                className="checklist-next-btn"
                onClick={this.handleButtonClick}
                // onClick={this.props.closePopup}
              >
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckList;
