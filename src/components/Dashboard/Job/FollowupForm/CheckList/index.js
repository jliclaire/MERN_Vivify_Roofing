import React, { Component } from "react";
import MetalList from "./MetalList";
import TileList from "./TileList";
import "./checkList.css";

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteAmount: 0,
      disabled: true,
      radioChecked: true
    };
  }

  handleRoofTypeChange = e => {
    this.setState({
      radioChecked: !this.state.radioChecked
    });
  };

  handleCheckedStatus = () => {
    console.log("should enable button");
    if (this.state.disabled === true) {
      this.setState({ disabled: false });
    }
  };

  handleQuoteAmountChange = e => {
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
          <form>
            <div className="checkbox-close-icon">
              <i
                className="far fa-window-close"
                onClick={this.props.closePopup}
              />
            </div>
            <h1 className="checkbox-title">Checklist</h1>
            <div className="checkbox-jobtype">
              <label>
                <input
                  type="radio"
                  name="jobType"
                  value="metal"
                  checked={this.state.radioChecked}
                  onChange={this.handleRoofTypeChange}
                />
                Metal
              </label>
              <label>
                <input
                  type="radio"
                  name="jobType"
                  value="tile"
                  onChange={this.handleRoofTypeChange}
                />
                Tile
              </label>
            </div>

            <div className="checkbox-list-container">
              {this.state.radioChecked ? (
                <MetalList checkListStatus={this.handleCheckedStatus} />
              ) : (
                <TileList checkListStatus={this.handleCheckedStatus} />
              )}
            </div>

            <div className="quote-wrapper">
              <label className="dollar-sign">$</label>
              <input
                className="quote-input"
                type="text"
                id="quoteAmount"
                onChange={this.handleQuoteAmountChange}
              />
            </div>
            <div className="next-btn-container">
              <button
                className="checklist-next-btn"
                onClick={this.handleButtonClick}
                disabled={this.state.disabled}
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
