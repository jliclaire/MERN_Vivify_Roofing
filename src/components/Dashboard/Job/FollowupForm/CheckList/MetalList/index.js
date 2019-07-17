import React, { Component } from "react";
import Checkbox from "./Checkbox";

const OPTIONS = ["checkOne", "checkTwo", "checkThree", "checkFour"];

class MetalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxes: OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      )
    };
  }

  handleCheckboxChange = e => {
    const { name } = e.target;
    // this.selectAll();
    // console.log(this.state.checkboxes);
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  // handleOnBlur = () => {
  //   console.log("on blur");
  //   const checkedArray = Object.keys(this.state.checkboxes).filter(
  //     checkbox => this.state.checkboxes[checkbox]
  //   );
  //   if (checkedArray.length === 4) {
  //     console.log("four calls");
  //     this.props.checkListStatus();
  //   } else {
  //     return null;
  //   }
  // };

  createCheckbox = option => (
    <Checkbox
      name={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      // onBlurChange={this.handleOnBlur}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  // loop through the state, if all values are true, call checkListStatus()
  selectAll = () => {
    const array = Object.keys(this.state.checkboxes).filter(
      checkbox => this.state.checkboxes[checkbox]
    );
    return array;
  };

  componentDidUpdate() {
    // console.log("componentDidUpdate");
    // let checkedArray = this.selectAll();
    // console.log(checkedArray);
    // this.props.checkListStatus(checkedArray);

    console.log("componentDidUpdate");
    const checkedArray = Object.keys(this.state.checkboxes).filter(
      checkbox => this.state.checkboxes[checkbox]
    );
    if (checkedArray.length === 4) {
      console.log("four calls");
      this.props.checkListStatus();
    }
  }

  // selectAll = () => {
  //   const checkedArray = Object.keys(this.state.checkboxes).filter(
  //     checkbox => this.state.checkboxes[checkbox]
  //   );
  //   console.log(checkedArray);
  //   if (checkedArray.length === 4) {
  //     this.props.checkListStatus();
  //   } else {
  //     return null;
  //   }
  // };

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  //   let checkedArray = this.selectAll();
  //   console.log(checkedArray);

  // }

  render() {
    return <div className="checkbox-list">{this.createCheckboxes()}</div>;
  }
}

export default MetalList;
