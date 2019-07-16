import React, { Component } from "react";
import "./checkList.css";

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteAmount: 0
    };
  }

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
                <input type="radio" name="jobType" value="metal" checked />
                Metal
              </label>
              <label>
                <input type="radio" name="jobType" value="tile" />
                Tile
              </label>
            </div>
            <div className="checkbox-list-container">
              <div className="checkbox-list">
                <label>
                  <input type="checkbox" name="checklist" />
                  Check the pitch/fall
                </label>
                <label>
                  <input type="checkbox" name="checklist" />
                  Skylights
                </label>
                <label>
                  <input type="checkbox" name="checklist" />
                  Sizing of the gutters
                </label>
                <label>
                  <input type="checkbox" name="checklist" />
                  Need carpentry
                </label>
              </div>
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
